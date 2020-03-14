var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers", function(req, res) {
    burger.create([
      "burger_name"
    ], [
      req.body.burger_name
    ], function(result) {
      // Send back the ID of the new quote
      res.redirect("/")
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    console.log(req.params.id);
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
    console.log(req.body.devoured);

    burger.update({
      devoured: 1
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  

// Export routes for server.js to use.
module.exports = router;
