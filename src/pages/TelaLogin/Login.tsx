import { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonText,
  IonRouterLink,
} from '@ionic/react';

import { useHistory } from 'react-router-dom';

import './Login.css';
import Logo from '../../img/Dapta models bluebg 1.svg';

const Login: React.FC = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const history = useHistory(); // Initialize the useHistory hook

  const handleLogin = () => {
    const registeredUser = JSON.parse(localStorage.getItem('registeredUser') || '{}');
    if (
      registeredUser.email === loginInfo.email &&
      registeredUser.password === loginInfo.password
    ) {
      alert('Login successful!');
      console.log('Logged In User:', loginInfo);
      history.push('/principal');
    } else {
      console.log('Incorrect email or password');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className='imagem'>
          <img src={Logo} alt="Your Image" className='logo' />
        </div>

        <div className="container1">
          <IonText className='login-text'>Login</IonText>
          <IonInput
            type="email"
            placeholder="E-mail"
            value={loginInfo.email}
            onIonChange={(e) => setLoginInfo({ ...loginInfo, email: e.detail.value! })}
            className='input'
            clearInput
          ></IonInput>

          <IonInput
            type="password"
            placeholder="Senha"
            value={loginInfo.password}
            onIonChange={(e) => setLoginInfo({ ...loginInfo, password: e.detail.value! })}
            className='input'
            clearInput
          ></IonInput>

          <IonText className='text'>
            Não tem uma conta?{' '}
            <IonRouterLink routerLink="/cadastro">Cadastro</IonRouterLink>
          </IonText>

          <IonButton onClick={handleLogin}>
            <IonText>Login</IonText>
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
