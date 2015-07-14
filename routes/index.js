var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var pokedex = require('../pokemonz.json');
// var logout = require("express-passport-logout")

//mongoose.connect(process.env.MONGO_URL);

// export MONGO_URL=mongodb://localhost/pokemontrader

var traderSchema = mongoose.Schema({
	trainer_name: {
		type: String
	},
	email: {
		type: String
	},
	friend_code: {
		type: String
	},
	owned_pokemon: [{
		name: {
			type: String
		}
	}]
});
// var pokemonSchema = mongoose.Schema
// var Traders = mongoose.model("Traders", traderSchema);


router.get('/logout', function(req, res) {
	console.log("logged out!");
	req.logout();
	res.redirect('/');
	// res.render('/register');
});

router.get("/onepokemon/:slug", function(req, res){
	console.log("backend hit");
	console.log("req:",req.params);
	var pokedex = JSON.parse(pokedex.pokemon);
	console.log(pokedex);
  pokedex.forEach(function(pokemon){
		if(pokemon.name === req.params.slug){
			console.log("this Pokemon:", pokemon);
			res.json(pokemon);
		}
		return;
	})
	// return;
});

router.get('/pokedex', function(req, res){
  console.log("pokedex hit");
  res.json(pokedex.pokemon);
});
/* GET home page. */
router.get('/', function(req, res, next) {
	if (!req.user) {
		res.render("register");
	} else {
// 		var trader = new Traders({
// 			trainer_name: req.user.displayName,
// 			email: req.user.emails[0].value
// 		});
// 		Traders.findOneAndUpdate({
// 			email: req.user.emails[0].value
// 		}, trader, {
// 			upsert: true,
// 			new: true
// 		}, function(err, savedEntry) {
// 			if (err) {
// 				console.log(err);
// 				res.status(400).json({
// 					error: "Trainer Not Saved!"
// 				});
// 			}
// //			 res.render("index");
// 			console.log('success savedEntry', savedEntry);
// 		});
      res.render("index");
	 }

});


router.get('/loggedIn', function(req, res, next) {
	console.log("hello");
	console.log(req.user);
	res.json(req.user);
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
