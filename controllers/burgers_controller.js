// Import burger model script
var connection = require('../models/burger.js');

var express = require('express');
var router = express.Router();


// EXAMPLE TO EDIT =============================================
//
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  
  // this "all" is defined in cat.js (THE MODEL)
  cat.all(function(data) {
    var hbsObject = {
      cats: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/cats", function(req, res) {
  cat.create([
    "name", "sleepy"
  ], [
    req.body.name, req.body.sleepy
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/cats/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  cat.update({
    sleepy: req.body.sleepy
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
// END EXAMPLE =============================================
//

// EXPORTS =============================================
//
// Export routes for server.js
module.exports = router;
