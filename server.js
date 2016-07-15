var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');



app.use(bodyParser.json());
app.use(cors());
var router = express.Router();
app.use('/api', router);

var rest = require('./REST.users.js');

var rest_router = new rest(router);


app.listen(6050, function() {
    console.log("All right ! I am alive at Port 6050.");
});
