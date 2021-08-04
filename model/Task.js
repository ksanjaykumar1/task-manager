const mongoose= require('mongoose');

// Instance of model is called document
// all the documents created will be pushed to specific collection
// model is the warpper for schema  , then model provides an interface to the database.
//So using the model will be able to create, update, query and delete our documents 
const TaskSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide a name'],
        trim:true,
        maxlenght:[20, 'name cannnot be more than 20 characters']
    },
    completed:{
        type:Boolean,
        default:false
    }
});

//the first actual parameter is the name of the collection
//Mongoose automatically looks for the plural, lowercased version of your model name. Thus, for the example above, the model Tank is for the tanks collection in the database.
module.exports =  mongoose.model('Task',TaskSchema)
