const express = require('express');
const userRoute = require('./routes/user');

 
const app = express();



app.use(express.json());

userRoute(app)


app.listen(5000, ()=> {
console.log('serveur succesfully launched')
})

