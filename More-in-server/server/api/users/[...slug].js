// import db from "../../../db.json";
import { createRouter, defineEventHandler, useBase } from "h3";
import { addData, getalldata, getsingledata } from "./handler";

const router = createRouter();
//@ all logics here
// router.get(
//   "/allpro",
//   defineEventHandler((e) => {
//     return db.products;
//   })
// );

// router.post(
//   "/addpro",
//   defineEventHandler((e) => {
//     return "Post added";
//   })
// );

//@ all logics of event handler on seprate file
router.get("/allpro", defineEventHandler(getalldata()));
router.get("/:id", defineEventHandler(getsingledata()));

router.post("/addpro", defineEventHandler(addData()));

export default useBase("/api/users", router.handler);
