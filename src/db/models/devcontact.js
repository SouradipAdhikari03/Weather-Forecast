const mongoose=require("mongoose");


const visitors= new mongoose.Schema({

    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
    },
    message:{
        type: String,
        required:true

    }
    
    
})


// create a collection


const feedback= new mongoose.model("WeatherApp",visitors);

module.exports=feedback;