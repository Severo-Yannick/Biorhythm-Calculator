import dayjs from "dayjs";

export function calculateBiorhythms(birthDate, targetDate, cycle) {
  return {
    physical: calculateBiorhythm(birthDate, targetDate, cycle),
    emotional: calculateBiorhythm(birthDate, targetDate, cycle),
    intellectual: 0.0,
  };
}

function calculateBiorhythm(birthDate, targetDate, cycle) {
  const birthDay = dayjs(birthDate);
  const targetDay = dayjs(targetDate);
  const diff = targetDay.diff(birthDay, "day");
  return Math.sin((2 * Math.PI * diff) / cycle);
}
