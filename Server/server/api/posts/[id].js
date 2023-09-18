import db from "../../../db.json";

export default defineEventHandler((e) => {
  const proid = e.context.params.id;
  const productData = db.products.find((val) => {
    return val.id == proid;
  });
  return productData;
});
