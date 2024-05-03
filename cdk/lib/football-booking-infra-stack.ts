import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as amplify from 'aws-cdk-lib/aws-amplify';

export class FootballBookingInfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const footballBookingAmplifyApp = new amplify.CfnApp(this, 'FootballBookingAmplifyApp', {
        name: 'football-booking',
        repository: '',
        accessToken: cdk.SecretValue.secretsManager('github-access-token').unsafeUnwrap(),
    });

     new amplify.CfnBranch(this, 'FootballBookingAmplifyBranch', {
        appId: footballBookingAmplifyApp.attrAppId,
        branchName: 'main',
        stage: 'DEVELOPMENT',
    });
    }
}
