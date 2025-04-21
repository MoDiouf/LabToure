const express = require("express");
const layouts = require("express-ejs-layouts");
const mongoose = require("mongoose");

// Contrôleurs
// Ajoutez les contrôleurs
const usersController = require("./controllers/usersController");
const coursesController = require("./controllers/coursesController");
const homeController = require("./controllers/homeController");
const faqController = require("./controllers/faqController");
const errorController = require("./controllers/errorController");
const subscribersController = require("./controllers/subscribersController");

const app = express();

// Connexion à MongoDB
mongoose.connect("mongodb://localhost:27017/ai_academy", {
  useNewUrlParser: true,
  useUnifiedTopology: true, // recommandé avec useNewUrlParser
});
const db = mongoose.connection;
db.once("open", () => {
  console.log("Connexion réussie à MongoDB avec Mongoose !");
});
db.on("error", (err) => {
  console.error("Erreur de connexion à MongoDB :", err);
});

// Configuration d’EJS comme moteur de template
app.set("view engine", "ejs");
app.use(layouts);

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Routes pour les utilisateurs
app.get("/users", usersController.index, usersController.indexView);
app.get("/users/new", usersController.new);
app.post("/users/create", usersController.create, usersController.redirectView);
app.get("/users/:id", usersController.show, usersController.showView);
app.get("/users/:id/edit", usersController.edit);
app.put("/users/:id/update", usersController.update, usersController.redirectView);
app.delete("/users/:id/delete", usersController.delete, usersController.redirectView);
// Routes pour les cours
app.get("/courses", coursesController.index, coursesController.indexView);
app.get("/courses/new", coursesController.new);
app.post("/courses/create", coursesController.create, coursesController.redirectView);
app.get("/courses/:id", coursesController.show, coursesController.showView);
app.get("/courses/:id/edit", coursesController.edit);
app.put("/courses/:id/update", coursesController.update, coursesController.redirectView);
app.delete("/courses/:id/delete", coursesController.delete, coursesController.redirectView);
// Gestion des erreurs
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

// Ajouter le middleware method-override
const methodOverride = require("method-override");
app.use(methodOverride("_method", {
methods: ["POST", "GET"]

}));
// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.set("port", PORT);

app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
