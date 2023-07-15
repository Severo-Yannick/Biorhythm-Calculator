import { calculateBiorhythms } from "./biorhythms";
const birthDate = "1999-12-31";
const targetDate = "2022-12-31";

const physicalResult = 0.9977;
it("calculates the physical biorhythm", () => {
  const biorhythms = calculateBiorhythms(birthDate, targetDate);
  expect(biorhythms.physical).toBeCloseTo(physicalResult);
});

const emotionalResult = 0.2225;
it("calculates the emotional biorhythm", () => {
  const biorhythms = calculateBiorhythms(birthDate, targetDate);
  expect(biorhythms.emotional).toBeCloseTo(emotionalResult);
});

const intellectualResult = -0.4582;
it("calculates the intellectual biorhythm", () => {
  const biorhythms = calculateBiorhythms(birthDate, targetDate);
  expect(biorhythms.intellectual).toBeCloseTo(intellectualResult);
});
