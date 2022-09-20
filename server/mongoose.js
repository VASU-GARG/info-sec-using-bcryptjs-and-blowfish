var mongoose = require('mongoose');

mongoose.connect("enter your mongoDB url here .... ");

collectionSchema = mongoose.Schema({
        name:String,
        email:String,
        password:String
});

collectionModel = mongoose.model('users',collectionSchema);

module.exports = collectionModel;
