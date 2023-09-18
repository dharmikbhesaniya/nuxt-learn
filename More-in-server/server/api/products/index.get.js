import db from "../../../db.json";

export default defineEventHandler((e) => {
  //@ Accessing runtime config
  const config = useRuntimeConfig();

  //@ Accessing runtime cookies
  const cookies = parseCookies(e);
  return db.products;
});
