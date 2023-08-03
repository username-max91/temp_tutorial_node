const http = require('http');

const server = http.createServer((req,res)=>{
    //console.log(req)
    if(req.url === '/'){
        res.end('welcome to the home page')
    }
    if(req.url === '/about'){
        res.end(`here's our short page history`)
    }
    res.end(`
    <h1>Ooops!</h1>
    <p>We couldn't find the page</p>
        `)
})

server.listen(5000)