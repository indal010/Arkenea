var express = require('express')
var bodyParser = require('body-parser')
const port = 5000
const app = express();
var database = require('./config/database')
var userRouter = require('./app/routes/user.route')
var path = require('path');
 
var cors = require('cors');
app.use(cors());
 
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(bodyParser.json())
 
 
 
app.use(express.static(path.join(__dirname, 'uploads')));
app.use('/user', userRouter)
app.listen(port, () => {
    console.log("Server running on port number: ", port);
})
 
database.mongoose


