const express = require("express");
const isAuthenticated = require("../middleware/isAuthenticated");
const { generateRoadmap } = require("../controllers/roadmap.controller");

const router = express.Router();

router.route("/generate").post(isAuthenticated, generateRoadmap);

module.exports = router;
