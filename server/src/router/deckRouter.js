const { Router } = require('express');
const { Deck, Card } = require('../../db/models');

const router = Router();

router.route('/').get(async (req, res) => {
  try {
    return res.status(200).json(await Deck.findAll({ attributes: ['name'] }));
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.route('/:deckId').get(async (req, res) => {
  try {
    const { deckId } = req.params;
    const cards = await Card.findAll({
      where: { deckId },
      attributes: ['id', 'question', 'answer', 'deckId'],
    });
    if (cards) {
      return res.sendStatus(404);
    }
    return res.status(200).json();
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

module.exports = router;
