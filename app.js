var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/yelp_camp",
	{	useNewUrlParser: true,
		useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgroundSchema=new mongoose.Schema({
	name: String,
	image: String,
	description: String
});

var Campground=mongoose.model("Campground", campgroundSchema)

// Campground.create(
// 	{
// 		name:"Granite Hill", 
// 		image:"https://www.nps.gov/mora/planyourvisit/images/OhanaCampground2016_CMeleedy_01_web.jpeg?maxwidth=1200&maxheight=1200&autorotate=false",
// 		description:"Beautiful Granite Hill campsite"},
// 		function(err, campground){
// 			if(err){
// 				console.log(err);
// 			}else{
// 				console.log("New Campground Created");
// 				console.log(campground);
// 			}
// 		}
// )

// var campgrounds=[
// 		{name:"Salmon Creek", image:"https://pixabay.com/get/55e8dc404f5aab14f6da8c7dda793f7f1636dfe2564c704c7d2f78d3974bc35a_340.jpg"},
// 		{name:"Granite Hill", image:"https://pixabay.com/get/52e5d7414355ac14f6da8c7dda793f7f1636dfe2564c704c7d2f78d3974bc35a_340.jpg"},
// 		{name:"Mountain Goat's Rest", image:"https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c7d2f78d3974bc35a_340.jpg"}
// 	]

app.get("/", function(req,res){
	res.render("landing");
})

app.get("/index", function(req,res){
	Campground.find({}, function(err, allCampgrounds){
		if(err){
			console.log(err);
		}else{
			res.render("index",{campgrounds:allCampgrounds});
		}
	})
})

app.post("/index",function(req,res){
	var name=req.body.name;
	var image=req.body.image;
	var desc=req.body.description;
	var newCampground={name:name, image:image, description:desc}
	Campground.create(newCampground, function(err,newlyCreated){
		if(err){
			console.log(err)
		}else{
			res.redirect("/index")
		}
	})
})

app.get("/index/new",function(req,res){
	res.render("new.ejs");
})

app.get("/index/:id",function(req,res){
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err){
			console.log(err);
		}else{
			res.render("show",{campground:foundCampground})
		}
	})
});

app.listen(3000,function(){
	console.log("YelpCamp has started");
})
