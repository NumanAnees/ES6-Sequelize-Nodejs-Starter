import express from "express";

import { getAll, create } from "../contollers/user";

const router = express.Router();

router.get("/", getAll);
router.post("/create", create);
module.exports = router;
