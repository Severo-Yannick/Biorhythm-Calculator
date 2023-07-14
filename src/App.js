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
import BiorhythmCard from "./components/BiorhythmCard";

const getToday = () => new Date().toISOString().slice(0, "yyyy-mm-dd".length);

function App() {
  const [birthDate, setBirthDate] = useState("");
  const [targetDate, setTargetDate] = useState(getToday());
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
            <IonLabel position="fixed">Birth Date:</IonLabel>
            <IonInput
              type="date"
              value={birthDate}
              onIonChange={(event) => setBirthDate(event.detail.value)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="fixed">Target date:</IonLabel>
            <IonInput
              type="date"
              value={targetDate}
              onIonChange={(event) => setTargetDate(event.detail.value)}
            ></IonInput>
          </IonItem>
        </IonList>
        <p>
          Birth date: <b>{birthDate}</b>
        </p>
        <BiorhythmCard targetDate={targetDate} />
      </IonContent>
    </IonApp>
  );
}

export default App;
