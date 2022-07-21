const router = require('express').Router();
const {
  getThoughts,
  getThoughtbyId,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router
  .route('/')
  .get(getThoughts)
  .post(createThought);


// /api/thoughts/:thoughtsId
router
  .route('/:thoughtId')
  .get(getThoughtbyId)
  .put(updateThought)
  .delete(deleteThought);

  // api/thoughts/:thoughtID/reactions

router
  .route("/:thoughtId/reactions")
  .post(createReaction);

// api/thoughts/:thoughtId/reactions/:reactionid
router
  .route("/:thoughtId/reactions/:reactionId")
  .delete(deleteReaction);


module.exports = router;
