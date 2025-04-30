// errorRoutes.js
const express = require('express');
const router = express.Router();

// Route d'exemple pour gérer les erreurs
router.get('/error', (req, res) => {
    res.render('error'); // Assure-toi que la vue 'error' existe dans ton dossier de vues
});

module.exports = router;
