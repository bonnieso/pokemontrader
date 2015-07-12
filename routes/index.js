var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.user);
  res.render('index', { title: 'Express' });
});

// Mongo stuff
  mongoose.connect(process.env.MONGO_URL);
  
//  export MONGO_URL=mongodb://localhost/pokemontrader
  
  var traderSchema = mongoose.Schema({
    trainer_name: { type: String },
    user_name: { type: String }, 
    friend_code: { type: String },
    owned_pokemon: [{name: {type: String}}]
  });
  
  var Traders = mongoose.model("Traders", traderSchema);
  
  router.post("/trader", function(req, res) {
    console.log("getting something");
    var trader = new Traders({trainer_name: req.body.trainer_name});
    console.log(req.body.trainer_name);

    trader.trainer_name = req.body.trainer_name;

    trader.save(function(err, trainerName) {
      if (err) {
        console.log(err);
        res.status(400).json({ error: "Validation Failed" });
      }
      console.log("new trainer:", trainerName);
      res.json(trainerName);
    });
  });
//end mongo stuff
module.exports = router;
