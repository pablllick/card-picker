const { Router } = require('express');
const { Deck, Card } = require('../../db/models');

const router = Router();

router.route('/').get(async (req, res) => {
  try {
    return res.status(200).json(await Deck.findAll({ attributes: ['name', 'id'] }));
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.route('/:deckID').get(async (req, res) => {
  try {
    const { deckID } = req.params;
    const cards = await Card.findAll({
      where: { deckID },
      attributes: ['id', 'question', 'answer', 'deckID'],
    });
    if (!cards) {
      return res.sendStatus(404);
    }
    return res.status(200).json(cards);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

module.exports = router;
