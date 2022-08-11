const express = require ("express");
const path =require("path")
const hbs=require("hbs")
const app = express();
const port= process.env.PORT || 7000;

// public static path

const static_path = path.join(__dirname,"../public")
const template_path = path.join(__dirname,"../templates/views")
const partials_path = path.join(__dirname,"../templates/partials")
app.set('view engine', 'hbs');
app.set('views', template_path)
 app.use(express.static(static_path));
hbs.registerPartials(partials_path);


// routing
app.get("/",(rq,rs)=>{
    rs.render("index");
})
app.get("/devcontact",(rq,rs)=>{
    rs.render("devcontact");
})
app.get("/weather",(rq,rs)=>{
    rs.render("weather");
})
app.get("*",(rq,rs)=>{
    rs.render("404error",{
        errorMsg:"Oops! Page Not Found!"
    });
})

app.listen(port,()=>{
    console.log(`listening to the port at ${port}`)
})