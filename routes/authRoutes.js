// routes/authRoutes.js

const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const passport = require("passport");

// Page de connexion
router.get("/login", authController.login);

// Traitement de l'authentification
router.post("/login", authController.authenticate);

// Page d'inscription
router.get("/signup", authController.signup);

// Traitement de l'inscription
router.post("/signup", authController.register);

// Déconnexion
router.get("/logout", authController.logout);

module.exports = router;
