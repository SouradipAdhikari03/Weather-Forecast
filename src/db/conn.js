const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/WeatherData")
.then(()=>{
    console.log("connected succesfully");
}).catch((e)=>{
    console.log("not connected");
})