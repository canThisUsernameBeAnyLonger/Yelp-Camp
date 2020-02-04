var mongoose=require("mongoose");
var Campground=require("./models/campground");
var Comment=require("./models/comment");

var data= [
	{
		name:"Cloud's Rest",
		image: "https://picsum.photos/410",
		description: "blah blah blah"
	},
	{
		name:"Desert Mesa",
		image: "https://picsum.photos/420",
		description: "blah blah blah"
	},
	{
		name:"Canyon floor",
		image: "https://picsum.photos/430",
		description: "blah blah blah"
	},
]

function seedDB() {
	Campground.remove({}, function(err){
		// if(err){
		// 	console.log(err);
		// }else{
		// 	console.log("removed campgrounds");
		// 		data.forEach(function(seed){
		// 		Campground.create(seed, function(err, campground){
		// 			if (err) {
		// 				console.log(err);
		// 			}else{
		// 				console.log("added campground");
		// 				Comment.create(
		// 					{
		// 						text: "This placce is great but I wish there was internet",
		// 						author: "Homer"
		// 					}, function(err, comment){
		// 						campground.comments.push(comment);
		// 						campground.save();
		// 						console.log("new comment created")
		// 					}
		// 				)
		// 			}
		// 		})
		// 	})
		// }
	});
};

module.exports=seedDB;