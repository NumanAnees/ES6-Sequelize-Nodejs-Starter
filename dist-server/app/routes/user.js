"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _user = require("../contollers/user");

var router = _express["default"].Router();

router.get("/", _user.getAll);
router.post("/create", _user.create);
module.exports = router;