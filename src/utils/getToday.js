export const getToday = () => new Date().toISOString().slice(0, "yyyy-mm-dd".length);
