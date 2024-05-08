import React from 'react';
import {Authenticator} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import {Amplify} from "aws-amplify";
import awsConfig from './aws-config';

Amplify.configure(awsConfig);

function App({Component, pageProps}) {
    console.log(awsConfig);

  return (
      <Authenticator>
          {({ signOut, user }) => (
              <main>
                  <h1>Hello {user?.username}</h1>
                  <button onClick={signOut}>Sign out</button>
                  <Component {...pageProps} />
              </main>
          )}
      </Authenticator>
  );
}

export default App;