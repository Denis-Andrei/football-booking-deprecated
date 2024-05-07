
export const awsConfig = {
    Auth: {
        identityPoolId: `${process.env.REACT_APP_IDENTITY_POOL_ID}`,
        region: `${process.env.REACT_APP_REGION}`,
        identityPoolRegion: `${process.env.REACT_APP_REGION}`,
        userPoolId: `${process.env.REACT_APP_USER_POOL_ID}`,
        userPoolWebClient: `${process.env.REACT_APP_USER_POOL_WEB_CLIENT_ID}`,
        aiGatewayUrl: `${process.env.REACT_APP_AI_GATEWAY_URL}`,
    }
}