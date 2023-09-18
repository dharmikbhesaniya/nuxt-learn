import db from "../../../db.json";

export default defineEventHandler((e) => {
  const query = getQuery(e);
  const proid = query.id;
  const dbProducts = db.products.find((val) => val.id == proid);
  setResponseStatus(e, 202, "Accepted");
  return dbProducts || { message: "Product Not Found" };
});
