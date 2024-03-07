import express from "express"
import bookRoute from "./routes/book.js"
import bodyParser from "body-parser"



const app = express()
const port = 4000
app.use (bodyParser.json())
app.use('/api', bookRoute )

app.get('/name/:user_name', function(req,res) {
    res.status(200);
    res.set('Content-type', 'text/html');
    res.send('<html><body>' +
    '<h1>Hello ' + req.params.user_name + '</h1>' +
    '</body></html>'
    );
  });

// app.get('/', (req, res)=>{
//     res.send('Hello World')
// });

// app.post("/", (req, res)=>{
//     res.send('POST request to the homepage');
// })

// app.get("/ab?cd", (req, res)=>{
//     res.send("GET request to the home")
// })

// app.get("/ab+cd", (req, res)=>{
//     res.send("GET request to the home")
// })


// this route will match abcd, abxcd, abRANDOMcd, ab123cd  etc
app.get("/ab*cd", (req, res)=>{
    res.send("GET request to the home2")
})

//regular expression i.e word that include a  
app.get(/a/, (req, res)=>{
    res.send("notice A in the URL")
})

app.get('/api/v1/stories/:id', function(req,res, next) { 
    //do authorization
    //if not authorized or there is an error 
    //return next(error);
    //if authorized and no errors 
    return next(); 
  }), function(req,res, next) {
   //extract id and fetch the object from the database
   //assuming no errors, save story in the request object 
    req.story = story;
    return next(); 
  }, function(req,res) {
   //output the result of the database search 
    res.send(res.story);
  };

  const authAdmin = function (req, res, next) { 
    return next(); 
   } 
   const getUsers = function (req, res, next) {
    return next();
   }
   const renderUsers = function (req, res) { 
    res.end(); 
   }
   const admin = [authAdmin, getUsers, renderUsers];
   app.get('/admin', admin); 

// matches with the end of search word
app.get(/.*fly$/, function (req, res) {
    res.send('/.*fly$/');
  })

// use of function chaining for all at once
app.get('/', function (req, res) {
    res.send('GET request to the homepage');
  }).post('/', function (req, res) {
    res.send('POST request to the homepage');
  }).all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...');
    next(); // pass control to the next handler
  }).use(function(req, res, next){
      res.status(404).send('Page introuvable !');
  });

// app.all('/secret', (req, res, next)=>{
//     res.send('accessing your secret files')
//     next()
// })


app.listen(port, ()=>console.log(`server is running on http://localhost:${port}`));
