var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var pokedex = require('../pokemonz.json');
// var logout = require("express-passport-logout")

mongoose.connect(process.env.MONGO_URL);

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

// router.get("/pokedex/:identity", function(req, res){
//   res.json(pokedex.pokemon.identity);
// });

router.get('/pokedex', function(req, res){
  console.log("pokedex hit");
  res.json(pokedex.pokemon);
});
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
       console.log('error');
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

router.post('/addnewuser', function(req, res){
  var trader = new Traders({
         trainer_name: req.user.displayName,
         email: req.user.emails[0].value
       });
  trader.save();
});

module.exports = router;
