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

// /api/students
router
  .route('/')
  .get(getUsers)
  .post(createUser);

// /api/students/:studentId
router
  .route('/:userId')
  .get(getUserbyId)
  .put(updateUserbyId)
  .delete(deleteUser);

// /api/students/:studentId/assignments
router
  .route('/:studentId/Friends')
  .post(addFriend);

// /api/students/:studentId/assignments/:assignmentId
router
  .route('/:studentId/assignments/:FriendId')
  .delete(deleteFriend);

module.exports = router;
