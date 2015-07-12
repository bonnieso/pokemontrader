var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


// mongoose.connect(process.env.MONGO_URL);

 // export MONGO_URL=mongodb://localhost/pokemontrader

var traderSchema = mongoose.Schema({
  trainer_name: { type: String },
  friend_code: { type: String },
  owned_pokemon: [{name: {type: String}}]
});

var Traders = mongoose.model("Traders", traderSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
    // console.log(req.user);
    res.render("index");
});

router.get('/loggedIn', function(req, res, next) {
  console.log("hello");
    console.log(req.user);
    res.json(req.user)
});

router.post("/update", function(req, res){
  Traders.findOne({trainer_name: req.user.displayName}, function(err, doc){
    doc.friend_code = req.body.code;
    doc.save(function(err, code){
      if (err){
        console.log(err);
        res.status(400).json({ error: "Couldn't add friend code." });
      }
      console.log("getting friend code:", code);
      res.json(code);
    });
  });
});

  router.post("/trader", function(req, res) {
    console.log(req.user);
    var trader = new Traders({trainer_name: req.user});
    // console.log(req.body.trainer_name);

    trader.trainer_name = req.user;

    trader.save(function(err, trainerName) {
      if (err) {
        console.log(err);
        res.status(400).json({ error: "Validation Failed" });
      }
      console.log("new trainer:", trainerName);
      res.json(trainerName);
    });
  });
module.exports = router;
