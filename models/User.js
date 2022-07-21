const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Reaction');

// Schema to create Student model
const studentSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, `Not a valid email address`]
    },
    thoughts: {
      type: Schema.Types.ObjectId
    },
    friends: {
      type: Schema.Types.ObjectId
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;
