var express = require('express');
var app = express();

app.set("view engine","jade")


app.get('/home',function(req,res){
  res.render('home')
})

const port = 8023
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
  console.log('Home page is running at https://localhost:8023/home')
})
