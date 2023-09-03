const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

router.post("/newContact", contactController.sendContact);
router.post("/connect", contactController.sendConnect);

module.exports = router;
