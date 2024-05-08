
 const awsConfig = {
   Auth: {
       Cognito: {
           identityPoolId: `${process.env.REACT_APP_IDENTITY_POOL_ID}`,
           identityPoolRegion: `${process.env.REACT_APP_REGION}`,
           userPoolId: `${process.env.REACT_APP_USER_POOL_ID}`,
           userPoolWebClient: `${process.env.REACT_APP_USER_POOL_WEB_CLIENT_ID}`,
       }
   },
     region: `${process.env.REACT_APP_REGION}`,
     aiGatewayUrl: `${process.env.REACT_APP_AI_GATEWAY_URL}`,
 }

export default awsConfig;