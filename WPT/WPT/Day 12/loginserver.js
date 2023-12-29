const http=require("http");
const fs=require("fs");
const url=require("url");
const m1=require("./loginmodule")

const server=http.createServer(function(req,resp){
       // it seperates url and qurystring and convert it into object 
       //ob={pathname: '/login',querystring:{uname:'user1',pass:'user1'}
      
      var ob=url.parse(req.url,true);
      console.log(ob);
      
      switch(ob.pathname){
        case "/form":
            console.log("in login");
           
            var rs=fs.createReadStream("./public/form.html");
            rs.pipe(resp);
            break;
        default:
            resp.writeHeader(404,{"content-type":"text/html"});
            resp.write("<h1>Invalid url</h1>");



      } 
      resp.end();
});

server.listen(9000,function(){
    console.log("server started at port 9000");
})
