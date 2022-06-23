import express from "express";
var router = express.Router();
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json("respond with a resource hello");
});

export default router;
