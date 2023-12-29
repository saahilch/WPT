const http=require('http');
const server=http.createServer(function(req,resp){
    console.log(req.url);
    resp.writeHeader(200,{"content-type":"text/html"});
    if(req.url==="/hello" && req.method==='GET'){
         resp.write("<h1>Hello World!!</h1>");
         resp.write("<h2>In home page</h2>")
         resp.end();
    }else if(req.url==="/welcome"){
        resp.write("<h1>Welcome to nodejs programming</h1>");
        resp.write("<h2>In welcome page</h2>")
        resp.end();
    }else{
        resp.write("<h1>In aboutus page</h1>");
        resp.write("<h2>In default option page</h2>")
        resp.end();
    }

});

server.listen(9000,function(){
    console.log("server is running at port 9000");
})