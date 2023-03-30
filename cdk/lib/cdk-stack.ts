import { RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { CloudFrontWebDistribution } from 'aws-cdk-lib/aws-cloudfront';
// import { Source } from 'aws-cdk-lib/aws-codebuild';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // S3
  const bucket = new Bucket(this, "ReactPortfolioBucket", {
    publicReadAccess: true,
    removalPolicy: RemovalPolicy.DESTROY,
    websiteIndexDocument: "index.html"
  });

  // S3 Deployment
  const src = new BucketDeployment(this, "DeployCRA", {
    sources: [Source.asset("../build")],
    destinationBucket:bucket
  });

  // Cloudfront
  const cf = new CloudFrontWebDistribution(this, "CDKCRAStaticDistribution", {
    originConfigs: [
      {
        s3OriginSource: {
          s3BucketSource: bucket
        },
        behaviors: [{isDefaultBehavior: true}]
      },
    ]
  })
  }
}
