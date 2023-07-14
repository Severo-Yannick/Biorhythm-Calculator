import { useState } from "react";
import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/react";

function App() {
  const [userName, setUserName] = useState("");
  const handleChange = (event) => setUserName(event.detail.value);
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythm</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonLabel position="stacked">Name:</IonLabel>
            <IonInput value={userName} onIonChange={handleChange}></IonInput>
          </IonItem>
        </IonList>
      </IonContent>
    </IonApp>
  );
}

export default App;
