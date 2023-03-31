import { HostedZone } from '@aws-cdk/aws-route53';
import { HttpsRedirect } from '@aws-cdk/aws-route53-patterns';
import { Stack, StackProps, Environment } from 'aws-cdk-lib';
import { IHostedZone } from 'aws-cdk-lib/aws-route53';

interface RedirectStackProps extends StackProps {
    env: Environment;
    siteDomain: string;
    zone: IHostedZone;
}

export class HttpsRedirectStack extends Stack {
  constructor(parent: Stack, id: string, props: RedirectStackProps) {
    super(parent, id, props);

    // The code that defines your stack goes here

    const hostedZone = HostedZone.fromHostedZoneAttributes(this, 'HostedZoneWithAttrs', {
      hostedZoneId: 'myZoneId',
      zoneName: 'binhngo.me'
    })

    new HttpsRedirect(this, 'wwwToNonWww', {
      recordNames: ['www.binhngo.me'],
      targetDomain: 'binhngo.me',
      zone: hostedZone
    })
  }
}