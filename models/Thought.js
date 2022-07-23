const { Schema, model } = require('mongoose');
const reactionSchema = require("./Reaction")

// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
    },
    username: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true
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
