import React from 'react';
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import { useHistory } from "react-router-dom";
import {
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonAlert,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Logo from '../image/makNewss.png';

const Register: React.FC = () => {
    const history = useHistory();
    const handleLogin = () => {
      return history.push('/login');
    }
    return (
        <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Signup Mak News</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonAlert
                isOpen={false}
                onDidDismiss={() => {
                  console.log("yes");
                }}
                cssClass="my-custom-class"
                header={"Error!"}
                buttons={["Dismiss"]}
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <img style={{ width: '100px' }} src={Logo} />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating"> Email</IonLabel>
                <IonInput type="email"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating"> Password</IonLabel>
                <IonInput type="password"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <p style={{ fontSize: "small" }}>
                By clicking LOGIN you agree to our <a href="#">Policy</a>
              </p>
              <IonButton expand="block" onClick={handleLogin}>
                Login
              </IonButton>
              <p style={{ fontSize: "medium" }}>
                Don't have an account? <a href="#" onClick={() => history.push('/signup')}>Sign up!</a>
              </p>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
    );
}

export default Register;