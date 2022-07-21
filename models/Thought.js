const { Schema, model } = require('mongoose');
const reactionSchema = require("./Reaction")

// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
    },
    username: {
      type: Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
