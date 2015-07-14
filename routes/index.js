var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var pokedex = require('../pokemonz.json');
// var logout = require("express-passport-logout")

mongoose.connect("mongodb://heroku_5q5z6sdf:gct7cldj152qh54rdvvbcmah0n@ds047612.mongolab.com:47612/heroku_5q5z6sdf");

// export MONGO_URL=mongodb://localhost/pokemontrader
var pokemonSchema = mongoose.Schema({
	name: {type: String, required: true},
	userID: {type: String},
	pokemonID: {type: Number},
	sprite: {type: String},
	abilities:[{type: String}]
});


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
 var Traders = mongoose.model("Traders", traderSchema);
 var Pokemon = mongoose.model("Pokemon", pokemonSchema);


router.get('/logout', function(req, res) {
	console.log("logged out!");
	req.logout();
	res.redirect('/');
	// res.render('/register');
});

router.get("/onepokemon/:slug", function(req, res){
	console.log("backend hit");
	// var Slug = JSON.stringify(req.params.slug);
	// var parsedSlug =JSON.parse(Slug)
	// console.log("parsedSlug", parsedSlug);
	console.log("this is pokedex:", pokedex.pokemon);
  pokedex.pokemon.forEach(function(pokemon){
		console.log("pokemon!", pokemon);
		if(pokemon.name == req.params.slug){
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

router.get("")
/* GET home page. */
router.get('/', function (req, res, next) {
  console.log("here");
  //check if user email is in database.
  //if it is, bring them to their trainer page with their info (/profile)
  //if not, bring them to a sign in page where they can add (trainer name and friend code)
 if (req.user){
   console.log("in /", req.user);
   Traders.findOne({email: req.user.emails[0].value }, function(error, trader){
     if (error) {
       console.log(error);
       res.status(500);
       return;
     }
     if (!trader) {
       console.log("No trader");
       res.render('newuser');
       return;
     }
     res.render('index');
     return;
   });
   return;
 }
 res.render('register');
//  res.render('index');
});


router.get('/loggedIn', function(req, res, next) {
	console.log("hello");
	console.log(req.user);
	res.json(req.user);
});

router.post("/updateuser", function(req, res) {
	Traders.findOne({
		email: req.user.emails[0].value
	}, function(err, doc) {
        doc.trainer_name = req.body.trainerName;
		doc.friend_code = req.body.friendCode;
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

router.post('/addnewuser', function(req, res){
  var trader = new Traders({
         trainer_name: req.body.trainername,
         email: req.user.emails[0].value,
         friend_code: req.body.friendcode
       });
  trader.save(function(err, newtrainer) {
			if (err) {
				console.log(err);
				res.status(400).json({
					error: "Couldn't add trainer."
				});
			}
			res.json(newtrainer);
		});
});

router.get('/getprofile', function(req,res){
  Traders.findOne({
      email: req.user.emails[0].value
  }, function(err, doc) {
      console.log("doc: ", doc);
      res.json(doc);
  });
});

module.exports = router;
