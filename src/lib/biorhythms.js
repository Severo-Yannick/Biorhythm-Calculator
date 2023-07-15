import dayjs from "dayjs";

export function calculateBiorhythms(birthDate, targetDate) {
  return {
    physical: calculateBiorhythm(birthDate, targetDate),
    emotional: 0.0,
    intellectual: 0.0,
  };
}

function calculateBiorhythm(birthDate, targetDate) {
  const birthDay = dayjs(birthDate);
  const targetDay = dayjs(targetDate);
  const diff = targetDay.diff(birthDay, "day");
  return Math.sin((2 * Math.PI * diff) / 23);
}
