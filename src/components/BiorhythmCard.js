import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import dayjs from "dayjs";
import { calculateBiorhythms } from "../lib/biorhythms";
import BiorhythmChart from "./BiorhytmChart";

const formatDate = (isoString) => {
  const day = dayjs(isoString);
  return day.format("DD MMMM YYYY");
};

const BiorhythmCard = ({ birthDate, targetDate }) => {
  const biorhythms = calculateBiorhythms(birthDate, targetDate);
  return (
    <IonCard className="ion-text-center">
      <IonCardHeader>
        <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <BiorhythmChart birthDate={birthDate} targetDate={targetDate} />
        <p>Physical: {biorhythms.physical.toFixed(4)}</p>
        <p>Emotional: {biorhythms.emotional.toFixed(4)}</p>
        <p>Intellectual: {biorhythms.intellectual.toFixed(4)}</p>
      </IonCardContent>
    </IonCard>
  );
};

export default BiorhythmCard;
