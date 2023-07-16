import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import dayjs from "dayjs";
import { calculateBiorhythms } from "../lib/biorhythms";
import BiorhythmChart from "./BiorhytmChart";
import "./BiorhythmCard.css";

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
      <IonCardContent className="BiorhythmCard">
        <BiorhythmChart birthDate={birthDate} targetDate={targetDate} />
        <p className="physical">
          <b>Physical:</b> {biorhythms.physical.toFixed(4)}
        </p>
        <p className="emotional">
          <b>Emotional:</b> {biorhythms.emotional.toFixed(4)}
        </p>
        <p className="intellectual">
          <b>Intellectual:</b> {biorhythms.intellectual.toFixed(4)}
        </p>
      </IonCardContent>
    </IonCard>
  );
};

export default BiorhythmCard;
