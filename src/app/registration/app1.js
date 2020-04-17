var express = require("express");
var localStorage=require("localStorage");
var nodemailer=require('nodemailer')
// var cors = require('cors')

var app = express();
var cookieParser = require('cookie-parser');
//var bcrypt = require('bcrypt');
//var SALT_WORK_FACTOR = 10;
var bodyParser = require('body-parser');
// app.use(cors({origin:["http://localhost:4200"]}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.append('Access-Control-Allow-Origin', ['*']);
	res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.append('Access-Control-Allow-Headers', 'Content-Type');
	next();
});


var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/cabbooking', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
var currentuser;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', mongoConnected);
var sess;
function mongoConnected() {
	var userSchema = new mongoose.Schema(
		{
			name: String,
			username: String,
			password: String,
			email: String,
			contact:String,
		}, { collection: 'user' });

	var User = mongoose.model("User", userSchema);

	app.post("/user", (req, res) => {
		var myData1 = new User(req.body);
		console.log(myData1)
		db.collection('user').findOne({username:myData1.username},function (err, user)
		{
			if(err){
				console.log(err);
			}
			else if(user)
			{
				console.log("alrady exist");
				var t={'check':'exist'};
				res.send(t);
			}
			else
			{
				
			
		db.collection('user').insertOne(myData1, function (err, collection) {
			if (err) 
			{
				throw err;
			}
			t={'check':'true'}
			console.log("Record inserted Successfully");
			var nodemailer= require('nodemailer');
			var transporter = nodemailer.createTransport({service: 'gmail',auth: {user: 'aksm741@gmail.com',pass: 'Aksm123#'}});
			var mailOptions= {from: 'aksm741@gmail.com',to:myData1.email,subject:'Registration',text: 'You are successfully registered'};
			transporter.sendMail(mailOptions, function(error, info){if (error) {console.log(error);} else {console.log('Email sent: ' + info.response);}});
			res.send(t);
			res.end();
		});
	}

		});
	});
	
	app.post('/admin/add',function (req, res) {

		var uo= JSON.parse(JSON.stringify(req.body));
		console.log(uo);
		db.collection('user').insertOne(uo,function(err){
			if(err) throw err
		});
		res.end();
	});
	
	
	
	
	
	
	
	// Defined get data(index or listing) route
	app.get('/admin/get',function (req, res) {
	  User.find(function (err, users){
		if(err){
		  console.log(err);
		}
		else {
		  res.json(users);
		}
	  });
	});
	
	// Defined edit route
	app.get('/admin/edit/:id',function (req, res) {
	  let id = req.params.id;
	  User.findById(id, function (err, user){
		  console.log(user._id)
		  res.json(user);
	  });
	});
	
	//  Defined update route
	app.post('/admin/update/:id',function (req, res) {
	  User.findById(req.params.id, function(err, user) {
		if (!user)
		  res.status(404).send("Record not found");
		else {
		  user.name = req.body.name;
		  user.username = req.body.username;
		  user.password = req.body.password;
		  user.email = req.body.email;
	
		  db.collection('user').save(user,function(err) {
			  if(err)
			  {
				  throw err;
			  }
			  else{
			  res.json('Update complete');
		  }})
		  
		}
	  });
	});
	
	// Defined delete | remove | destroy route
	app.get('/admin/delete/:id',function (req, res) {
		User.findByIdAndRemove({_id: req.params.id}, function(err, user){
			if(err) res.json(err);
			else res.json('Successfully removed');
		});
	});
	app.post('/admin/addroute',function (req, res) {
	
		var ro= JSON.parse(JSON.stringify(req.body));
		console.log(ro);
		db.collection('route').insertOne(ro,function(err){
			if(err) throw err
		});
		res.end();
	});
	var rideSchema = new mongoose.Schema(
		{
			src:String ,
			username: String,
			dest: String,
			fare: String,
			date:Date,
		}, { collection: 'ride' });
		var r
	var Ride = mongoose.model("Ride", rideSchema);
	app.post('/viewride', function (req, res) {
		console.log("view")
		console.log(req.body)
		var myData=req.body;
		//var myData1=new Ride();
		var uname=myData.user
		
		r=Ride
		//console.log(uname)
		//console.log(myData1)
		Ride.find({ username: uname},function (err,ride)
		{
				if(err)
					throw err;
				else
					{
						console.log(ride)
						res.send(ride)
					}
		});
		//console.log(res);
		
			
	});
	app.post('/allride', function (req, res) {
		console.log("view")
		//console.log(req.body)
		//var myData=req.body;
		//var myData1=new Ride();
		//var uname=myData.user
		
		r=Ride
		//console.log(uname)
		//console.log(myData1)
		Ride.find({},function (err,ride)
		{
				if(err)
					throw err;
				else
					{
						console.log(ride)
						res.send(ride)
					}
		});
		//console.log(res);
		
			
	});
	
	var routeSchema = new mongoose.Schema(
		{
			src:String ,
			
			dest: String,
			distance: String,
			
		}, { collection: 'route' });
		var r
	var Route = mongoose.model("Route", routeSchema);
	app.post('/allroutes', function (req, res) {
		console.log("view")
		//console.log(req.body)
		//var myData=req.body;
		//var myData1=new Ride();
		//var uname=myData.user
		
		r=Route
		//console.log(uname)
		//console.log(myData1)
		Route.find({},function (err,route)
		{
				if(err)
					throw err;
				else
					{
					//	console.log(ride)
						res.send(route)
					}
		});
		//console.log(res);
		
			
	});
	
	app.post('/login', function (req, res) {
		// new code should come over here
		console.log("hello")
		//sess = req.session;
		//sess.uname='';
		var myData1 = new User(req.body);
		var uname=myData1.username;
		var pass=myData1.password;
		if(uname=='admin' && pass=='admin')
		{
			var t={check:'admin'}
			res.send(t)	
		}
		else
		{
		db.collection('user').findOne({ username: uname, password: pass}, function (err, user) {
			if (err) {
				console.log(err);
			}
			else if (user) {
				 //sess.uname= uname;
				// sess.save();
				// localStorage.setItem('myFirstKey', 'myFirstValue')

			 localStorage.setItem('currentuser',uname);
			 console.log(localStorage.getItem('currentuser'));
				var t={'check':'true','session':uname}
				console.log("logged in");
				//console.log(sess.uname)
				//res.write('<h1>hello</h1>');
				res.send(t);
				res.end();
			}
			else {
				console.log('Invalid');
				var t={'check':'false'}
				res.send(t);
				res.end();
			}
		});
	}
});
	
// var rideSchema = new mongoose.Schema(
// 	{
// 		src:String,
// 		username: String,
// 		dest: String,
// 		fare:String,
// 	}, { collection: 'ride' });

// var Ride = mongoose.model("Ride", rideSchema);
app.post('/confirmbooking', function (req, res) {
	// new code should come over here
	console.log("hello")
	var myData1 = new Ride(req.body);
	//sess = req.session;
	//console.log(sess.uname)
	console.log();
	var username=localStorage.getItem('currentuser')
//	myData1=JSON.parse(myData1);
	var src=myData1.src;
	var dest=myData1.dest;
	var fare=myData1.fare;
	//console.log(src);
	var email;
	console.log(myData1.date);
	myData1.save(myData1, function (err, user) {
		if (err) {
			console.log(err);
		}
		else if (user) {
			//var b=req.session.uname;
			//console.log(user.distance)
			var t={'check':'true'}//,'session':localStorage.getItem('currentuser'),'distance':user.distance,'src':user.place1,'dest':user.place2};
			//console.log(b)
			console.log(myData1.username)
			
			User.findOne({username:myData1.username},function(err,u){
				if(err)
					throw err;
				else
				{
					email=JSON.stringify(u.email);
					console.log(email)
				
			console.log(email)
			var nodemailer= require('nodemailer');
			var transporter = nodemailer.createTransport({service: 'gmail',auth: {user: 'aksm741@gmail.com',pass: 'Aksm123#'}});
			var mailOptions= {from: 'aksm741@gmail.com',to:email,subject:'booking confirmed',text: 'your booking is confirmed with following details source: '+src+' destination: '+dest+' fare: '+fare};
			transporter.sendMail(mailOptions, function(error, info){if (error) {console.log(error);} else {console.log('Email sent: ' + info.response);}});
			console.log("insert");
			res.send(t)
			res.end();
		}
	
})
		}
		else {
			var t={'check':'false'};
			console.log('Invalid');
			res.send(t);
			res.end();
		}
	});

});


app.post('/booking', function (req, res) {
	// new code should come over here
	console.log("hello")
	var myData1 = (req.body);
	//sess = req.session;
	//console.log(sess.uname)
	//console.log(localStorage.getItem('currentuser'));

//	myData1=JSON.parse(myData1);
	var src=myData1.src;
	var dest=myData1.dest;
	console.log(src);
	console.log(myData1);
	db.collection('route').findOne({ place1: src, place2: dest}, function (err, user) {
		if (err) {
			console.log(err);
		}
		else if (user) {
			
			console.log(user.distance)
			var t={'date':myData1.date,'check':'true','distance':user.distance,'src':user.place1,'dest':user.place2};
		
			//console.log(b)
			console.log("available");
			res.send(t)
			res.end();
		}
		else {
			var t={'check':'false'};
			console.log('Invalid');
			res.send(t);
			res.end();
		}
	});
	
	
});
}
		app.listen(8000);

		console.log("server listening at port 8000");
	