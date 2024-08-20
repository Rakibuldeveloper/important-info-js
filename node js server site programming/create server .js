// create node js server

const http = require("http");


const server = http.createServer(function(req, res){

    if(req.url == "/"){
        res.end("homePage")
    };
    if(req.res == "/profile"){
        res.end("profile")
    }
    if(req.url == "/login"){
        res.end("Login")
    }

});

server.listen(3030,function (){
    console.log("srver running");
})