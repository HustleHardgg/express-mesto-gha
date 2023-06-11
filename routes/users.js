const userRouter = require('express').Router();

const {
  getUserList, getUserId, createUser, updateUserData, updateUserAvatar,
} = require('../controllers/users');

// Валидация
const {
  validateUserId, validateUserUpdate, validateUserAvatar,
} = require('../utils/data-validation');

// Получить список, отдельный объект или создать
userRouter.get('/', getUserList);
userRouter.get('/:userId', validateUserId, getUserId);
userRouter.post('/', createUser);
// Обновить профиль или аватар
userRouter.patch('/me', updateUserData);
userRouter.patch('/me/avatar', updateUserAvatar, validateUserUpdate, validateUserAvatar);

module.exports = userRouter;
