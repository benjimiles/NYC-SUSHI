// pages/_app.js
import '../app/globals.css';

import { AuthProvider, useAuth } from '@/AuthContext';

function MyApp({ Component, pageProps }) {
  console.log('Inside _app component');
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
