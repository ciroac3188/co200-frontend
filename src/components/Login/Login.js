import '../Login/Login.css';
import React from "react";
import GoogleLogin from 'react-google-login';


function Login() {

  const respOKGoogle = (respuesta) => {
    console.log(respuesta);
    console.log(respuesta.profileObj);
    //validar si existe como usuario y su estado
    // si existe, redireccionar
    // si no existe, registrarlo con estado pendiente...
  }

  const respWrongGoogle = (respuesta) => {
    console.log(respuesta);
  }

  return (
    <div>
      <div class="bg-img">
        <div class="contenido">
          <header>Login CO200</header>
          <GoogleLogin
            clientId="429513669075-ht7ane4fnotjik9nsb4slp01h0qhegbv.apps.googleusercontent.com"
            buttonText="Iniciar Sesión con Google"
            onSuccess={respOKGoogle}
            onFailure={respWrongGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      </div>
    </div>
  );
}
export default Login;