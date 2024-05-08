import React from 'react';
import {Authenticator} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import {Amplify} from "aws-amplify";
import awsExports from './aws-exports';

Amplify.configure(awsExports);
function App({Component, pageProps}) {

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