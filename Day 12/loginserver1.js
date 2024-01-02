const http=require('http');
const fs=require('fs');
const url=require("url");
const m1=require("./loginmodule")

const server=http.createServer(function(req,resp){
   
    var ob=url.parse(req.url,true);
     console.log(ob);
    switch(ob.pathname){
        case "/login":
                resp.writeHeader(200,{"content-type":"text/html"});
                var rs=fs.createReadStream('./public/Login.html');
                rs.pipe(resp);
                /*rs.on("error",function(){

                })*/
            break;
        case "/validate":
            resp.writeHeader(200,{"content-type":"text/html"});
            var result=m1.validate(ob.query.uname,ob.query.pass);
            if(result!==null){
                resp.write("valid user");
            }else{
                resp.write("invalid user")
            }
            resp.end();
            break;
        default:
            resp.writeHeader(200,{"content-type":"text/html"});
            resp.write("<h1>In aboutus page</h1>");
            resp.write("<h2>In default option page</h2>")
            resp.end();
    }
});

server.listen(9000,function(){
    console.log("server started at port 9000");
})
