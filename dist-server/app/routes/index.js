"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("./user"));

var router = _express["default"].Router();

router.use("/user", _user["default"]); //router.use("/bundle", bundle);

module.exports = router;