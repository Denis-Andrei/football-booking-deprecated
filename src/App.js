import React from 'react';
import { Amplify } from 'aws-amplify';
import {Authenticator} from "@aws-amplify/ui-react";
import './App.css';


import { awsConfig } from './aws-config';

Amplify.configure(awsConfig);
function App() {
  // const [showResult, setShowResult] = useState(false);
  // const [apiMessage, setApiMessage] = useState("");
  //
  // const getApiMessage = async () => {
  //
  //   console.log(process.env.REACT_APP_API_GATEWAY_URL);
  //   const response = await fetch(`${process.env.REACT_APP_API_GATEWAY_URL}/hello`, {
  //     mode: 'no-cors'
  //   });
  //
  //   const responseData = await response.text();
  //   console.log(responseData)
  //
  //   setShowResult(true);
  //   setApiMessage(responseData);
  // };


  return (
      <Authenticator>
        {({ signOut, user }) => (
            <main>
              <h1>Hello {user.username}</h1>
              <button onClick={signOut}>Sign out</button>
            </main>
        )}
      </Authenticator>
  );
}

export default App;