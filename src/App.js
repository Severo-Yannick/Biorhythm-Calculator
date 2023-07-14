import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

function App() {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythm</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>
          Biorhythm ipsum dolor sit amet consectetur adipisicing elit.
          Earum sint sapiente odit dolores ratione iure culpa, saepe officia eum
          impedit, et quia repellendus reprehenderit pariatur. Necessitatibus
          debitis sit fugit quos.…
        </p>
      </IonContent>
    </IonApp>
  );
}

export default App;
