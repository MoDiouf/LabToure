const express = require("express");
const router = express.Router();
const subscribersController = require("../controllers/subscribersController");

router.get("/", subscribersController.getAllSubscribers);
router.get("/new", subscribersController.getSubscriptionPage);
router.post("/create", subscribersController.saveSubscriber);
router.get("/:id", subscribersController.show);

module.exports = router;
