const express = require("express");
const hbs=require("hbs");
const path=require("path");

const app =express();
const port=process.env.PORT||3000;
// const static_path=path.join(__dirname,"../public")
// console.log(static_path);
// app.use(express.static(static_path))



const helo=path.join(__dirname,"/templates/views");

app.set("view engine","hbs");
app.set("views", helo);


///staice file serving

//console.log(helo);



 const partailsPath=path.join(__dirname,"/templates/partails");


hbs.registerPartials(partailsPath);
//console.log(partailsPath);

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about");
  })

app.get("/weather",(req,res)=>{
    res.render("weather")
})

app.get("*",(req,res)=>{
    res.render("404error",
    {
        errorMsg:"oops page not found"
    })
})
app.listen(3000,()=>{
    console.log(`port is working on ${port}`);
})