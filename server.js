var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('ugo',['ugo']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.get('/ugo', function(req, res){
	console.log('I received a GET request');

	db.ugo.find(function (err, docs){
		console.log(docs);
		res.json(docs);
	});
})

app.post('/ugo', function(req, res) {
	console.log("FM" + req.body);
	//req.body._id = 0;
	db.ugo.insert(req.body, function(err, doc) {
		res.json(doc);
	});
});


app.delete('/ugo/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	db.ugo.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
		res.json(doc);
	});
});

app.get('/ugo/:id', function(req,res){
	var id = req.params.id;
	console.log(id);
	db.ugo.findOne({_id: mongojs.ObjectID(id)}, function(err,doc){
		res.json(doc);
	});
});

app.put('/ugo/:id', function(req, res){
	var id = req.params.id;
	//console.log(req.body.name);
	db.ugo.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {name: req.body.name, location: req.body.location, position: req.body.detail, time: req.body.time, telephone: req.body.telephone, website: req.body.website, cost: req.body.cost}},
		new: true}, function (err,doc) {
			res.json(doc);
		});
});

app.listen(3000);
console.log("Server running on port 3000");

/*
{
	name: 
	location:
	position:
	detail:
	time:
	telephone:
	website:
	cost:
}
*/