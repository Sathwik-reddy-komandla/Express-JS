import http from "http";

const server=http.createServer((req,res)=>{
    if (req.url=='/'){
        res.writeHead(201,"ok",{"Content-Type":"text/html"})
        res.write("Heello /")
    }else if (req.url=="/about"){
        res.writeHead(201,"ok",{"Content-Type":"text/html"})
        res.write("About")
    }else{
        res.write("404 Not Found")
    }

    res.end()
});


server.listen(3000,()=>console.log("listeing at 3000"))