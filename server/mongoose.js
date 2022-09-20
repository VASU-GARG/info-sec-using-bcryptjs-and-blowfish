var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Vasu:Vasu@cluster0.6vuhk.mongodb.net/ISAA_LAB_A3?retryWrites=true&w=majority");

collectionSchema = mongoose.Schema({
        name:String,
        email:String,
        password:String
});

collectionModel = mongoose.model('users',collectionSchema);

module.exports = collectionModel;