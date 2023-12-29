const http=require('http');
const fs=require('fs');

const server=http.createServer(function(req,resp){
    resp.writeHeader(200,{"content-type":"text/html"});
    switch(req.url){
        case "/hello":
                var rs=fs.createReadStream('./public/hello.html');
                rs.pipe(resp);
                /*rs.on("error",function(){

                })*/
            break;
        case "/calculate":
            var rs=fs.createReadStream("./public/Login1.html");
            rs.pipe(resp);
            break;
        case "/welcome":
            resp.write("<h1>Welcome to nodejs programming</h1>");
            resp.write("<h2>In welcome page</h2>")
            resp.end();
            break;
        default:
            resp.write("<h1>In aboutus page</h1>");
            resp.write("<h2>In default option page</h2>")
            resp.end();
    }
});

server.listen(9000,function(){
    console.log("server started at port 9000");
})
