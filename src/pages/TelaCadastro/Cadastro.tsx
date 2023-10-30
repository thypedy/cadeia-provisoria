import React, { useState } from 'react';
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

import './Cadastro.css';
import Logo from '../../img/Dapta models bluebg 1.svg';

const Cadastro: React.FC = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const history = useHistory(); // Initialize the useHistory hook

  const handleRegistration = () => {
    if (user.password !== user.confirmPassword) {
      console.log('Passwords do not match');
      return;
    }

    localStorage.setItem('registeredUser', JSON.stringify({ email: user.email, password: user.password }));

    window.alert('User registered successfully!');
    console.log('Registered User:', user);
    history.push('/login');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cadastro</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className='imagem'>
          <img src={Logo} alt="Your Image" className='logo' />
        </div>

        <div className="container2">
          <IonText className='cadastro-text'>Cadastro</IonText>
          <IonInput
            type="email"
            placeholder="E-mail"
            value={user.email}
            onIonChange={(e) => setUser({ ...user, email: e.detail.value! })}
            className='input'
            clearInput
          ></IonInput>

          <IonInput
            type="text"
            placeholder='Nome'
            value={user.name}
            onIonChange={(e) => setUser({ ...user, name: e.detail.value! })}
            className='input'
            clearInput
          ></IonInput>

          <IonInput
            type="password"
            placeholder="Senha"
            value={user.password}
            onIonChange={(e) => setUser({ ...user, password: e.detail.value! })}
            className='input'
            clearInput
          ></IonInput>

          <IonInput
            type="password"
            placeholder="Confirmar Senha"
            value={user.confirmPassword}
            onIonChange={(e) => setUser({ ...user, confirmPassword: e.detail.value! })}
            className='input'
            clearInput
          ></IonInput>

          <IonText className='text'>
            Já fez o cadastro? <IonRouterLink routerLink="/login">Login</IonRouterLink>
          </IonText>

          <IonButton onClick={handleRegistration}>Cadastrar</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Cadastro;
