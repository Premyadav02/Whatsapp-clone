import Messenger from './component/Messenger.jsx';

import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider.jsx';

function App() {

  const ClientId = '911886505111-6q4n69qnclau6euq9tlmpjlvd2noul5c.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId= {ClientId}>
      <AccountProvider>
        <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
