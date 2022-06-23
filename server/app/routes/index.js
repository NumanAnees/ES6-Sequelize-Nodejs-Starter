import express from "express";

const router = express.Router();

import user from "./user";

router.use("/user", user);
//router.use("/bundle", bundle);

module.exports = router;
