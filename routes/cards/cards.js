const express = require("express");
const router = express.Router();
const {
  newCard,
  allcards,
  updateCard,
  cardById,
  deleteCard,
  get
} = require("../../controllers/cardsController/cardsController");

//* api/cards

//! get all cards
router.get("/cards", allcards);
//! get card by id
router.get("/cards/:id", cardById);
//! post a card
router.post("/cards", newCard);
//! test injection
router.post("/test", get);
//! update card by id
router.put("/:id", updateCard);
//! delete card by id
router.delete("/:id", deleteCard);

module.exports = router;
