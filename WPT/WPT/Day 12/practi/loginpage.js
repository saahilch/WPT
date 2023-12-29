const http = require('http');
const fs = require('fs');
const url = require('url');
const m1 = require("./log");
const server = http.createServer(function (req, resp) {
    var ob = url.parse(req.url, true)
    console.log(ob)
    switch (ob.pathname) {
        case "/login":
            resp.writeHeder(200, { "content-type": "text/html" })
            var rs = fs.createReadStream('./public/login.html');
            rs.pipe(resp)
            break;
        case "/validate":
            resp.writeHeder(200, { "content-type": "type/html" })
            var result = m1.validate(ob.query.uname, ob.query.pass)
            if (result !== null) {
                resp.write("m1.validate user")
            }

            else {
                resp.write("invalid user")
            }

            resp.end();
            break;
         default:
            resp.writeHeder(200, { "content-type": "type/html" })
            resp.write("<h1>in aboutus page<\h1>")
            resp.write("<h2>in default option<\h2>")
            resp.end();

    }

});
server.listen(9191,function(){
    console.log("server started at 9000 on port")
})
