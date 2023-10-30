import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonRouterLink,
  IonText,
} from "@ionic/react";

import "./Home.css";

import daptoImg from "../img/Dapta models bluebg 1.svg";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-text-center page">
        <div className="logo-container">
          <img
            src={daptoImg}
            alt="Your Image"
            style={{ marginBottom: "220px" }}
          />
        </div>

        <div className="button-container">
          <IonRouterLink className="routerLink" routerLink="/login" routerDirection="forward">
            <IonButton className="login">
              <IonText className="login-text">Login</IonText>
              </IonButton>
          </IonRouterLink>
          <IonButton className="cadastro">Cadastro</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
