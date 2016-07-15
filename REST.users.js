var sg = require("./temporaryStorage.js");

var cache = require('memory-cache');

cache.put('users', sg.loadData().reverse());
function REST_ROUTER(router) {
    var self = this;
    self.handleRoutes(router);
   
}

REST_ROUTER.prototype.handleRoutes = function(router) {

    router.get('/', function(req, res) {
        console.log('Hi');
        res.json({
            "Error": false,
            "Message": "Success",
            "users": []
        });
    });


	
	
	router.get('/loadData',function(req,res){
    //var users =
	//cache.put('users', sg.loadData());
    res.json({
            "Error": false,
            "Message": "Success",
            "users": cache.get('users')
        });

	});
  

 router.post('/addUser',function(req,res){
	
     var user = req.body;
	 console.log(user);
     var cacheuser= cache.get('users');
	  console.log(cacheuser);
		user.id=cacheuser.length+1;
		cacheuser.push(user);
		 console.log(cacheuser);

    res.json({
            "Error": false,
            "Message": "Success",
            "users": user
        });

	});

    router.put('/editUser', function(req, res) {
		
        var user = req.body;
       var inde=user[0];
		 console.log(user);
		  var cacheuser= cache.get('users');
		// cacheuser.reverse();
       cacheuser[inde.index]=user[1];
	   console.log(cacheuser);
	  
	  
		res.json({
            "Error": false,
            "Message": "User Successfully updated",
            "users": cacheuser
        });
    });
    router.delete('/deleteUser', function(req, res) {
        var user = req.body;
		 var cacheuser= cache.get('users');
		  cacheuser.splice(user,1);
		
		console.log(cacheuser);
		cache.put('users',cacheuser)
        //sg.remove(user);
        res.json({
            "Error": false,
            "Message": "User Successfully deleted",
            "users": user
        });
    });
};






module.exports = REST_ROUTER;
