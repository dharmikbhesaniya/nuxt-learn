export default defineEventHandler(() => {
  const islog = true;
  if (!islog) {
    throw new Error("Not Authenticated");
  }
});
