import { CfnOutput, Environment, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { CloudFrontAllowedMethods, CloudFrontWebDistribution, OriginAccessIdentity, ViewerCertificate } from 'aws-cdk-lib/aws-cloudfront';
import { CanonicalUserPrincipal, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { AaaaRecord, ARecord, HostedZone, IHostedZone, RecordTarget } from 'aws-cdk-lib/aws-route53';
import { HttpsRedirect } from 'aws-cdk-lib/aws-route53-patterns';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets';
// import { Source } from 'aws-cdk-lib/aws-codebuild';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
// import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

interface ReactPortfolioStackProps extends StackProps {
  env: Environment;
  siteDomain: string;
  viewerCertificate: ViewerCertificate;
  zone: IHostedZone;
  // needed for redirect
  readonly redirectToApex? : boolean;
  readonly zoneName : string;
  readonly zoneId? : string;

}
export class ReactPortfolioStack extends Stack {
  constructor(parent: Stack, id: string, props: ReactPortfolioStackProps) {
    super(parent, id, props);

    const cloudfrontOAI = new OriginAccessIdentity(this, "CloudFrontOAI", {
      comment: `OAI for ${id}`,
    })

    const domainName = props.redirectToApex ? props.zoneName : `www.${props.zoneName}`;
    const redirectDomainName = props.redirectToApex ? `www.${props.zoneName}` : props.zoneName;
    
    const zone = props.zoneId ? HostedZone.fromHostedZoneAttributes(this, 'HostedZone', {
      hostedZoneId: props.zoneId,
      zoneName: props.zoneName,
  }) : HostedZone.fromLookup(this, 'HostedZone', { domainName: props.zoneName });
    // S3
  const bucket = new Bucket(this, "ReactPortfolioBucket", {
    bucketName: "binhngo.me",
    publicReadAccess: true,
    removalPolicy: RemovalPolicy.DESTROY,
    websiteIndexDocument: "index.html"
  });

    // grants permissions to an AWS account

  bucket.addToResourcePolicy(
    new PolicyStatement({
      actions: ["s3:GetObject"],
      resources: [bucket.arnForObjects("*")],
      principals: [
        new CanonicalUserPrincipal(
          cloudfrontOAI.cloudFrontOriginAccessIdentityS3CanonicalUserId
        ),
      ],
    })
  );

  new CfnOutput(this, "Bucket", { value: bucket.bucketName });

  
  // Cloudfront
  const cf = new CloudFrontWebDistribution(this, "CDKCRAStaticDistribution", {
    viewerCertificate: props.viewerCertificate,
    originConfigs: [
      {
        s3OriginSource: {
          s3BucketSource: bucket,
          originAccessIdentity: cloudfrontOAI,
        },
        behaviors: [
          {
            isDefaultBehavior: true,
            // compress: true,
            // allowedMethods: CloudFrontAllowedMethods.GET_HEAD_OPTIONS
          }
        ],
      },
    ],
    // errorConfigurations: [
    //   {
    //     errorCode: 403,
    //     errorCachingMinTtl: 10,
    //     responseCode: 200,
    //     responsePagePath: "/index.html"
    //   },
    // ],
  }
  );
  new ARecord(this, "ARecord", {
    recordName: props.siteDomain,
    target: RecordTarget.fromAlias(new CloudFrontTarget(cf)),
    zone: props.zone,
  });

  new AaaaRecord(this, "AAAARecord", {
    recordName:props.siteDomain,
    target: RecordTarget.fromAlias(new CloudFrontTarget(cf)),
    zone: props.zone,
  });
  
  // S3 Deployment
  const src = new BucketDeployment(this, "DeployCRA", {
    sources: [Source.asset("../build")],
    destinationBucket:bucket,
    distribution: cf,
    distributionPaths: ["/*"]
  });

  new HttpsRedirect(this, "Redirect", {
    zone,
    recordNames: [redirectDomainName],
    targetDomain: domainName,
  })

}
}
