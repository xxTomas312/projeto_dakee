import React from 'react';
import { GoogleLogin } from 'react-google-login';
import './google_login.css'; // Import the CSS file
import Gmail from '../../images/gmail_icon.png'


const LoginPage: React.FC = () => {
  const responseGoogle = (response: any) => {
    // Lógica de resposta do Google
    console.log(response);
  };

  return (
    <div className="login-page">
      <GoogleLogin
        clientId="seu-client-id-do-Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        render={renderProps => (
          <button
            className="login-button"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <img src={Gmail} alt="Google Logo" className="google-logo" />
          </button>
        )}
      />
    </div>
  );
};

export default LoginPage;