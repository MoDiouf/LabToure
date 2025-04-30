const express = require("express");
const router = express.Router();
const coursesController = require("../controllers/coursesController");

// Exemple de routes
router.get("/", coursesController.indexView);          // GET /courses
router.get("/new", coursesController.new);         // GET /courses/new
router.post("/create", coursesController.create)  // POST /courses/create

module.exports = router;
