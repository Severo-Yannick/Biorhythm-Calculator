import dayjs from "dayjs";

export function calculateBiorhythms(birthDate, targetDate) {
  const physicalCycle = 23,
    emotionalCycle = 28,
    intellectualCycle = 33;
  return {
    physical: calculateBiorhythm(birthDate, targetDate, physicalCycle),
    emotional: calculateBiorhythm(birthDate, targetDate, emotionalCycle),
    intellectual: calculateBiorhythm(birthDate, targetDate, intellectualCycle),
  };
}

function calculateBiorhythm(birthDate, targetDate, cycle) {
  const birthDay = dayjs(birthDate);
  const targetDay = dayjs(targetDate);
  const diff = targetDay.diff(birthDay, "day");
  return Math.sin((2 * Math.PI * diff) / cycle);
}
