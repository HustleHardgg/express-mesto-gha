const cardRouter = require('express').Router();

const {
  getCardList, createCard, deleteCard, likeCard, removeLikeCard,
} = require('../controllers/cards');

// Валидация
const {
  validateCreateCard, validateCardId,
} = require('../utils/data-validation');

// Получить список, создать или удалить
cardRouter.get('/', getCardList);
cardRouter.post('/', createCard, validateCreateCard);
cardRouter.delete('/:cardId', deleteCard);
// Поставить и убрать лайк
cardRouter.put('/:cardId/likes', likeCard);
cardRouter.delete('/:cardId/likes', removeLikeCard, validateCardId);

module.exports = cardRouter;
