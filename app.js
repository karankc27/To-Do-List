const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
var items=[];

app.set("view engine","ejs");
app.get("/",function(req,res){
  var today=new Date();
  var options={
    weekday:"long",
    day:"numeric",
    month:"long"
  } ;
  var day=today.toLocaleDateString("en-US",options);

res.render("list",{kindofday:day,newListItem: items});
})

app.post("/",function(req,res){
  var item= req.body.newItem;
  items.push(item);
  res.redirect("/");
});

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> {
  console.log(`Server Runing on Port ${PORT}`)
})
