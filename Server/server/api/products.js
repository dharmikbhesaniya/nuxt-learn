import db from "../../db.json";

// export default defineEventHandler((e) => {
//   return db.products
// });

export default defineEventHandler((e) => {
  if (e.node.req.method === "GET") {
    return db.products;
  } else if (e.node.req.method === "POST") {
    return {
      message: "Post request success",
    };
  }
});
