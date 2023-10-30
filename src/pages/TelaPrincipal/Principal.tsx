import React from "react";
import { IonContent, IonPage, IonText } from "@ionic/react";
import Header from "../../components/Header/Header";
import "./Principal.css";

import PlantData from "./PlantData"; // Import plantData
import "./PlantItem.css";

import { IonIcon } from "@ionic/react";
import { locationOutline } from "ionicons/icons";

import { Link } from "react-router-dom";

const Principal: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="container">
        <Header />
        <IonText className="texto">5.840 plantas gratuitas</IonText>

        {PlantData.map((plant) => (
          <Link
            key={plant.id}
            to={{
              pathname: `/plant/${plant.id}`,
              state: { plantData: plant }, // Pass plant data as state
            }}
          >
            <div className="plant-item">
              <img src={plant.image} alt={plant.name} className="plant-image" />
              <div className="plant-details">
                <h2 className="plant-name">{plant.name}</h2>
                <div className="locations">
                <IonIcon icon={locationOutline} />
                <p>{plant.location}</p>
                </div>
                <p>{plant.subtitle}</p>
              </div>
            </div>
          </Link>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Principal;