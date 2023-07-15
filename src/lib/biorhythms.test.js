import { calculateBiorhythms } from "./biorhythms";

it("calculates the physical biorhythm", () => {
  const biorhythms = calculateBiorhythms("1999-12-31", "2022-12-31", 23);
  expect(biorhythms.physical).toBeCloseTo(0.9977);
});

it("calculates the emotional biorhythm", () => {
  const biorhythms = calculateBiorhythms("1999-12-31", "2022-12-31", 28);
  expect(biorhythms.physical).toBeCloseTo(0.2225);
});
