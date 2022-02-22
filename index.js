const express = require ('express');
const res = require('express/lib/response');

const app = express();

app.use(express.json());

app.get('/test', async(request,response)=> {
    res.json('Hello world')
})

app.listen(3000, ()=> {
console.log('serveur succesfully launched')
})
