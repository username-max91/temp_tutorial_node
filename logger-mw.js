const logger = (req,res,next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method,url,time)
    //res.send('Test') - this let's the middleware to send its own data instead
    //next() or another response is mandatory for middleware functions
    next()
}
module.exports = logger