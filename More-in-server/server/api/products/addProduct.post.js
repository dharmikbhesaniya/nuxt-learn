export default defineEventHandler(async (e) => {
  const body = await readBody(e);
  return { message: "Success", data: body };
});
