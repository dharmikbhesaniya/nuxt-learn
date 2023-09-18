import db from "../../../db.json";

// export default defineEventHandler((e) => {
//   const proid = e.context.params.id;
//   const dbProducts = db.products.find((val) => val.id == proid);
//   return dbProducts || { message: "Product Not Found" };
// });

//@ Throwing Exception
export default defineEventHandler((e) => {
  const proid = parseInt(e.context.params.id);
  if (!Number.isInteger(proid)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Id must be a Number",
    });
  }
  const dbProducts = db.products.find((val) => val.id == proid);
  return dbProducts || { message: "Product Not Found" };
});
