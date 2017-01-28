console.log('May the Node be with you ')

var mongoose =  require('mongoose')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json())
mongoose.connect('mongodb://localhost:27017/test');

// export PATH = '$PATH:/Users/hitesh/Documents/mongodb-osx-x86_64-3.2.10/bin'

// mongoose.createConnection('mongodb://localhost:27017/test', (err, database) =>{
//   if (err) {
//     console.log(error)
//   }
//   console.log(database)
  
// })

var multipart = require('connect-multiparty');
var multiMiddlerWare = multipart()
require('./routes')(app, multiMiddlerWare)


app.get('/',(req,res) => {
  res.sendFile( __dirname + '/index.html')
});

app.listen(3001, function() {
  console.log('listening on 3001')
});

module.exports = app