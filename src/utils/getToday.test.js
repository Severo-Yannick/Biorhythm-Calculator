import { getToday } from "./getToday";

it("check format of the date is yyyy-mm-dd", () => {
  const today = getToday();
  const regexDate = /^\d{4}-\d{2}-\d{2}$/;
  expect(today.match(regexDate)).toBeTruthy();
});
