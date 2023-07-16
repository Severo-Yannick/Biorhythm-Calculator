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

export function calculateBiorhythmSeries(birthDate, centralDate, range) {
  const series = [];
  const centralDay = dayjs(centralDate);
  for (let diff = -range; diff <= range; diff++) {
    const targetDay = centralDay.add(diff, "day");
    const biorhythms = calculateBiorhythms(birthDate, targetDay);
    series.push({ date: targetDay.format("D MMM"), ...biorhythms });
  }
  return series;
}

function calculateBiorhythm(birthDate, targetDate, cycle) {
  const birthDay = dayjs(birthDate);
  const targetDay = dayjs(targetDate);
  const diff = targetDay.diff(birthDay, "day");
  return Math.sin((2 * Math.PI * diff) / cycle);
}
