// Import burger ORM object
var connection = require('../config/orm.js');


// Calls to ORM functions using burger specific input
var burger = {
  // cb = callback
  selectAll: function(cb) {
    // calling into "orm: all" 
    orm.all('burgers', function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.create('burgers', cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.update('burgers', objColVals, condition, function(res) {
      cb(res);
    });
  }
};


// EXPORTS =============================================
//
// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
