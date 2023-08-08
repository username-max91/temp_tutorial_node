const express = require('express')
const app = express()
const {products} = require('./node-express-course/02-express-tutorial/data.js')

app.get('/',(req,res)=>{
    //res.json([{name:'john'},{name:'susan'}])
    res.send('<h1>Hello World. Home page</h1><a href="/api/products">products</a>')
})
//reducing the output of the json file to name and link only
app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {name,image} = product;
        return {name,image}
    })
    res.json(newProducts)
})

//getting a single product details (#1)
app.get('/api/products/1',(req,res)=>{
    const singleProduct = products.find((product) => product.id === 1)
    res.json(singleProduct)
})
//shorter approach and more flexible
app.get('/api/products/:productID', (req,res)=>{
    //console.log(req);
    //console.log(req.params);
    const {productID} = req.params;

    const singleProduct = products.find(
        (product) => product.id === Number(productID))
    //console.log(singleProduct)
    if(!singleProduct) {
        return res.status(404).send('Product not found')
    }
    res.json(singleProduct)
})
//more complex .get logic example
app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    res.send('hello world')
})

app.get('/api/v1/query',(req,res)=>{
    //console.log(req.query);
    const {search,limit} = req.query
    let sortedProducts = [...products]
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)

        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length < 1){
        //res.status(200).send('no products match the search params')
        return res.status(200).json({success:true,data:[]})
    }
    res.status(200).json(sortedProducts)
    //res.send('hello world')
})

//API string example with a query search starting with '?' sign
//http://hn.algolia.com/api/v1/search?query=foo&tags=story


app.listen(5000, ()=>{
    console.log('server on port 5000..')
})