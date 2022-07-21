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
    {
        thought:  'We love batman',
        reactions: []
    },
    {
        thought:  'We love catwoman',
        reactions: []
    },
    {
        thought:   'We love joker',
        reactions: []
    },
    {
        thought:  'we love lucius fox',
        reactions: []
    },
    {
        thought:  'we love bats',
        reactions: []
    },
    {
        thought:  'we love cats',
        reactions: []
    },
    {
        thought:   'we like green eggs and ham',
        reactions: []
    },
   
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
  