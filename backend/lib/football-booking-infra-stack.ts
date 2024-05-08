import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as amplify from 'aws-cdk-lib/aws-amplify';
import * as cognito from 'aws-cdk-lib/aws-cognito';


export interface FootballBookingInfraStackProps extends cdk.StackProps {
    API_GATEWAY_URL: string;
    Region: string;
}
export class FootballBookingInfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: FootballBookingInfraStackProps) {
    super(scope, id, props);

    const userPool = new cognito.UserPool(this, 'FootballBookingUserPool', {
        selfSignUpEnabled: true,
        autoVerify: { email: true },
        signInAliases: { email: true },
    })

   const userPoolClient =  new cognito.UserPoolClient(this, 'FootballBookingUserPoolClient', {
        userPool: userPool,
        generateSecret: false,
    })

  const identityPool = new cognito.CfnIdentityPool(this, 'FootballBookingIdentityPool', {
        allowUnauthenticatedIdentities: false,
        cognitoIdentityProviders: [{
            clientId: userPoolClient.userPoolClientId,
            providerName: userPool.userPoolProviderName
        }]
  })


    const footballBookingAmplifyApp = new amplify.CfnApp(this, 'FootballBookingAmplifyApp', {
        name: 'football-booking',
        repository: 'https://github.com/Denis-Andrei/football-booking',
        accessToken: cdk.SecretValue.secretsManager('github-access-token').unsafeUnwrap(),
        environmentVariables: [
            {
                name: "IDENTITY_POOL_ID",
                value: identityPool.ref
            },
            {
                name: "USER_POOL_ID",
                value: userPool.userPoolId
            },
            {
                name: "USER_POOL_CLIENT_ID",
                value: userPoolClient.userPoolClientId
            },
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
