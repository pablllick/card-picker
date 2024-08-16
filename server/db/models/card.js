'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Deck }) {
      this.belongsTo(Deck, { foreignKey: 'deckID' });
    }
  }
  Card.init(
    {
      question: DataTypes.STRING,
      answer: DataTypes.STRING,
      deckID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Card',
    },
  );
  return Card;
};
