const users = [
    {
        email: "batman@mailinator.com",
        username: "ChristianBale",
        thoughts: [],
        
    },
    {
        email: "lucius@mailinator.com",
        username: "MorganFreeman",
        thoughts: [],
        
    },
    {
        email: "catwoman@mailinator.com",
        username: "AnneHathaway",
        thoughts: [],
        
    },
    {
        email: "joker@mailinator.com",
        username: "HeathLedger",
        thoughts: [],
    },
];

const thoughts = [

    'We love batman',
    'We love catwoman',
    'We love joker',
    'we love lucius fox',
    'we love bats',
    'we love cats',
    'we like green eggs and ham',
    
];

const reactions = [
    'We hate batman',
    'We hate joker',
    'We hate catwoman',
    'we hate lucius fox',
    'we hate bats',
    'we hate cats',
    'we still like green eggs and ham'
];
 
  // Export the functions for use in seed.js
  module.exports = { users, thoughts, reactions };
  