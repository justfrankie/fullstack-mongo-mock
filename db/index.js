// build your database
var mongoose = require('mongoose');
var productSchema = require('./schema.js');
var mongoUri = 'mongodb://localhost/ebidProducts';
mongoose.Promise = global.Promise;
// allow use of es6 promises
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to DBS!")
});
mongoose.connect(mongoUri, {useNewUrlParser: true});
// Connect Mongoose to our local MongoDB via URI specified above and export it below

// Register the productSchema with Mongoose as the 'Product' collection.
var Product = mongoose.model('products', productSchema)


module.exports = Product;