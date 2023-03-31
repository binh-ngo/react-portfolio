#!/usr/bin/env node
import { App, Environment, Stack, StackProps } from "aws-cdk-lib";
import { CertificateStack } from "../lib/certificate-stack";
import { ReactPortfolioStack } from "../lib/react-portfolio-stack";
import { HttpsRedirectStack } from "../lib/redirect-stack";
require("dotenv").config({ path: "./.env" });

const targetRegion = "us-east-1";

const app = new App();

class MyPortfolio extends Stack {
  constructor(parent: App, name: string, props: StackProps) {
    super(parent, name, props);
    const certificate = new CertificateStack(this, "CertificateStack", {
      env: props.env as Environment,
      domainName: "binhngo.me",
      siteSubDomain: "*",
    });

    new ReactPortfolioStack(this, "PortfolioStack", {
      env: props.env as Environment,
      siteDomain: certificate.siteDomain,
      viewerCertificate: certificate.viewerCertificate,
      zone: certificate.zone,
    })
  }
} 
new HttpsRedirectStack(app, "HttpsRedirectStack", {
  env: {
    region: targetRegion,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  }
})

new MyPortfolio(app, "BinhNgoPortfolio", {
  env: {
    region: targetRegion, 
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});

