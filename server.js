const express = require('express');
const port = process.env.PORT || 3000;

// calling express as a function
var app = express();

// adding built-in middleware to tweak express
// setting up a static directory for a web page
app.use(express.static(__dirname+ '/public'));

// register / set up a handler for a http get request
// context route
app.get('/', (req,res) => {
  // req has the header, body, path of req
  // res has bunch of methods to respond to req with status, response type etc

  //res.send('<h1>Hello Express!</h1>'); // content type defaults to text/html
  res.send({
    name: 'Adi',
    likes: [
      'Coffee',
      'Tennis'
    ]
  }); // applicatio/json
});

app.get('/about', (req,res) => {
  res.send('about page');

});

app.get('/bad', (req,res) => {
  res.send({
    err: 'Unable to respond to request'
  });

});
// binding the app to a port on our machine or a server machine
app.listen(port, ()=>{
  console.log(`Server is up on ${port}`);

}); // can take a 2nd arg
