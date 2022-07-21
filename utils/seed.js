const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { users, thoughts, reactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  await Thought.deleteMany({});

  await User.deleteMany({});

  for (const user of users) {
    await User.create(user)
  };

  const userData = await User.find();

  for (const user of userData) {
    await User.updateOne(
            {
                id: user.id
            },
            {
                $addFriends: {
                    friends: userData[Math.floor(Math.random() * userData.length)].id,
                }
            }
        
        )
    };

const mapThoughts = thoughts.map((thought) => {
    const randomId = Math.floor(Math.random() * userData.length);
    const userId = userData[randomId]
    
    return {
        thoughtText : thought,
        userId: userId.id,
        username: userId.username,
        reactions: []
    }
});





  // Add students to the collection and await the results
  await User.collection.insertMany(users);


  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
