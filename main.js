
const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello, User!</h1> <h3> Welcome Home</h3>\n');
});

server.listen(port, () => {
  console.log(`Server is running on port number::${port}`);
})





















/*var https = require('https');
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
var fs = require('fs');

let url = "https://restcountries.com/v2/name/peru";

app.get('/home', function(request, response){
    response.sendFile('home.html');
});

https.get(url,(res) => {
    let body = "";

    res.on("data", (chunk) => {
        body += chunk;
    });

    res.on("end", () => {
        try {
            let json = JSON.parse(body);
           // console.log(json[0].name);
        } catch (error) {
            console.error(error.message);
        };
    });

}).on("error", (error) => {
    console.error(error.message);
});

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/home.html'));
    //__dirname : It will resolve to your project folder.
  });

  app.use('/', router);
  app.listen(process.env.port || 3000);  

  console.log('Running at Port 3000'); 
   */