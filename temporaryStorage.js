
/**
 * Basic memory system to get data from it
*/
var singleton = function singleton(){
    var content = {};
	var users = [];

   
  
 
   
	this.loadData=function(){
    	 users = [];
	
    for (var i = 0, j = 10; i < j; i++) {
        var user = {
            id: (i + 1),
            firstName: 'firstName_' + (i + 1),
            lastName: 'Last_' + (i + 1),
            email: 'user' + (i + 1) + '@gmail.com',
            position: 'Position' + (i + 1)
        }
        users.push(user);
    }
       var data=users;
	
		return data;
	};
 
 
 
     
    //Disable the ability to call the singleton without using the getInstance function
    if(singleton.caller != singleton.getInstance){
        throw new Error("This object cannot be instanciated");
    }
}
 

singleton.instance = null;
 
 
/**
 * Singleton getInstance definition
 * @return singleton class
 */
singleton.getInstance = function(){
    if(this.instance === null){
        this.instance = new singleton();
    }
    return this.instance;
}
 
module.exports = singleton.getInstance();