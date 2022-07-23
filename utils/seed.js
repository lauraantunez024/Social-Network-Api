const connection = require("../config/connection");
const { Thought, User } = require("../models");
const { users, thoughts, reactions } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected to db");
  await User.deleteMany({});
  await Thought.deleteMany({});

  for (const user of users) {
    await User.create(user);
  }
  let userData = await User.find();

  for (const user of userData) {
    await User.updateOne(
      { _id: user._id },
      {
        $addToSet: {
          friends: userData[Math.floor(Math.random() * userData.length)]._id,
        },
      }
    );
  }

  const getThought = thoughts.map((thought) => {
    const randIndex = Math.floor(Math.random() * userData.length);

    return {
      thoughtText: thought,
      userId: userData[randIndex]._id,
      username: userData[randIndex].username,
      reactions: [],
    };
  });


  for (const thought of getThought) {
    await Thought.create(thought);
  }
  const thoughtData = await Thought.find();

  for (const thought of thoughtData) {
    await User.findOneAndUpdate(
      { _id: thought.userId },
      {
        $addToSet: {
          thoughts: thought._id,
        },
      }
    );
    for (let i = 0; i < 2; i++) {
      const rIndex = Math.floor(Math.random() * userData.length);
      const reaction =
        reactions[Math.floor(Math.random() * reactions.length)];
      const reactionObj = {
        username: userData[rIndex].username,
        userId: userData[rIndex]._id,
        reactionBody: reaction,
      };
      await Thought.findOneAndUpdate(
        { _id: thought._id },
        {
          $push: {
            reactions: reactionObj,
          },
        }
      );
    }
  }

  console.log("Your DB is ready!");
  process.exit(0);
});