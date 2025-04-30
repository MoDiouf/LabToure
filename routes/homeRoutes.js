const express = require("express");
const router = express.Router();

// Exemple de route pour la page d'accueil
router.get("/", (req, res) => {
    res.render("index");
});

module.exports = router;
