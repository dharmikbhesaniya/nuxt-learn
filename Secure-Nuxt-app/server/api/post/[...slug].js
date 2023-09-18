import { createRouter, useBase, defineEventHandler } from "h3";
import { addpost, getpost } from "./handler";

const router = createRouter();

router.get("/getpost", getpost());
router.post("/addpost", addpost());

export default useBase("/api/post", router.handler);
