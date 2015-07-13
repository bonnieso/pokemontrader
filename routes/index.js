var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


 // mongoose.connect(process.env.MONGO_URL);

// export MONGO_URL=mongodb://localhost/pokemontrader

var traderSchema = mongoose.Schema({
  trainer_name: { type: String },
  email: { type: String },
  friend_code: { type: String },
  owned_pokemon: [{name: {type: String}}]
});

var Traders = mongoose.model("Traders", traderSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
	// console.log(req.user);
	if (!req.user) {
		res.render("register")
	} else {
    var trader = new Traders({
      trainer_name: req.user.displayName,
      email: req.user.emails[0].value
    });
    Traders.findOneAndUpdate({email: req.user.emails[0].value }, trader ,{upsert: true, new: true}, function(err, savedEntry){
        if (err) {
        console.log(err);
        res.status(400).json({ error: "Trainer Saved!" });
      }
      // res.render("index");
       console.log('success savedEntry', savedEntry);
    });
  }
  res.render("index");
});

router.get('/loggedIn', function(req, res, next) {
	console.log("hello");
	console.log(req.user);
	res.json(req.user)
});

router.post("/updateuser", function(req, res) {
	Traders.findOne({
		trainer_name: req.user.displayName
	}, function(err, doc) {
		doc.friend_code = req.body.code;
		doc.save(function(err, code) {
			if (err) {
				console.log(err);
				res.status(400).json({
					error: "Couldn't add friend code."
				});
			}
			console.log("getting friend code:", code);
			res.json(code);
		});
	});
});

module.exports = router;
