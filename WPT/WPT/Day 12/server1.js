const http= require('http');
//this function will handle every request received from client
//It receives req and resp object, these objects server will generate 
//and pass it to the callback function
var server=http.createServer(function(req,resp){
    console.log(req.url);
    resp.writeHeader(200,{"content-type":"text/html"});
    //resp.write("<html><body>");
    resp.write("<h1>Hello World!!");
    resp.write("<h1>Welcome to nodejs program");
    //resp.write("</body></html>")
    resp.end("<h4>This is last line</h4>");

});
//to start the server at port 9000
server.listen(9000,function(){
    console.log("server started at port 9000")
})
