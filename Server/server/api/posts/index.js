import db from "../../../db.json";

export default defineEventHandler((e) => {
  return db.products;
});
