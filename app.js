let express = require('express');
let app = express();
let dotenv = require('dotenv');
dotenv.config();
let port = process.env.PORT || 3000;

let productRouter = require('./router/productRouter');
let categoryRouter = require('./router/categoryRouter');

app.get('/', (req,res)=>{
    res.send('server running');
})

app.use('/category', categoryRouter);
app.use('/products',productRouter);

app.listen(port,(err,res)=>{
    if(err) throw err
    console.log(`listening on ${port}`);
})

