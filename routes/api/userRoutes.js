const router = require('express').Router();

const {
  getUsers,
  createUser,
  getUserbyId,
  updateUserbyId,
  addFriend,
  deleteFriend,
  deleteUser,
} = require("../../controllers/userController");
// /api/user
router
  .route('/')
  .get(getUsers)
  .post(createUser);

// /api/user/:userId
router
  .route('/:userId')
  .get(getUserbyId)
  .put(updateUserbyId)
  .delete(deleteUser);

router
  .route('/:userId/Friends')
  .post(addFriend);

router
  .route('/:userId/friends/:friendId')
  .delete(deleteFriend);

module.exports = router;
