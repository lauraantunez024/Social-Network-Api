const router = require('express').Router();
const {
  getUsers,
  getUserbyId,
  updateUserbyId,
  createUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController');

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

// /api/user/:userId/assignments
router
  .route('/:user/Friends')
  .post(addFriend);

// /api/user/:userId/assignments/:assignmentId
router
  .route('/:userId/assignments/:FriendId')
  .delete(deleteFriend);

module.exports = router;
