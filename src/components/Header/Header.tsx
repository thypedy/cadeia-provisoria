import React from 'react';
import {
  IonButtons,
  IonButton,
  IonInput,
  IonIcon,
  IonItem,
} from '@ionic/react';
import { searchOutline, personCircleOutline, reorderThree } from 'ionicons/icons';

import './Header.css';

const Header: React.FC = () => {
  return (
    <>
      <div className='header'>

        <IonButtons slot='start'>
        <IonButton fill="clear">
          <IonIcon icon={personCircleOutline} className="icones" color="medium" />
        </IonButton>
        </IonButtons>

        <IonItem>
          <div className="searchContainer">
          <IonInput placeholder="Search"></IonInput>
      <IonIcon icon={searchOutline} size="medium" color="primary" className='searchIcon'/>
          </div>

          <IonButtons slot="end">

        {/* Reorder Button */}
        <IonButton fill="clear">
          <IonIcon icon={reorderThree} className="icones" color="primary" />
        </IonButton>
      </IonButtons>
        </IonItem>

      </div>
      </>
  );
};

export default Header;
