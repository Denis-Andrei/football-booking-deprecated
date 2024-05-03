import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as amplify from 'aws-cdk-lib/aws-amplify';


export interface FootballBookingInfraStackProps extends cdk.StackProps {
    API_GATEWAY_URL: string;
    Region: string;
}
export class FootballBookingInfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: FootballBookingInfraStackProps) {
    super(scope, id, props);

    const footballBookingAmplifyApp = new amplify.CfnApp(this, 'FootballBookingAmplifyApp', {
        name: 'football-booking',
        repository: 'https://github.com/Denis-Andrei/football-booking',
        accessToken: cdk.SecretValue.secretsManager('github-access-token').unsafeUnwrap(),
        environmentVariables: [
            {
                name: "API_GATEWAY_URL",
                value: props.API_GATEWAY_URL
            },
            {
                name: "REGION",
                value: props.Region
            }
        ]
    });

     new amplify.CfnBranch(this, 'FootballBookingAmplifyBranch', {
        appId: footballBookingAmplifyApp.attrAppId,
        branchName: 'main',
        stage: 'DEVELOPMENT',
    });
    }
}
