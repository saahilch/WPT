const http=require('http');
const fs=require('fs');
const url=require('url');
const m1=require("./module1");

const server=http.createServer(function(req,resp){
    const ob=url.parse(req.url,true); 
    /*url=http://localhost:9000/submit-data?num1=100&num2=200&btn=add
    ob={
        pathname:"/submit-data",
        query:{num1:100,num2:200,btn:"add"}
    }*/
    

    switch(ob.pathname){
        case "/hello":
            resp.writeHeader(200,{"content-type":"text/html"});
                var rs=fs.createReadStream('./public/hello.html');
                rs.pipe(resp);
                /*rs.on("error",function(){
                    resp.writeHeader(404,{"content-type":"text/html"});
                    resp.write("page not found");
                    resp.end();
                })*/
            break;
        case "/calculate":
            var rs=fs.createReadStream("./public/form.html");
            rs.pipe(resp);
            break;
        case "/submit_data":
            
            if(ob.query.btn==="add"){
                resp.write(`num1: ${ob.query.num1} num2: ${ob.query.num2} btn: ${ob.query.btn}`)
                var result=m1.addition(parseInt(ob.query.num1),parseInt(ob.query.num2));
                resp.write("Addition: "+result);
            }else{
                resp.write(`num1: ${ob.query.num1}  btn: ${ob.query.btn}`)
                var result=m1.factorial(parseInt(ob.query.num1));
                resp.write("Factorial: "+result);
            }
            resp.end();
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
