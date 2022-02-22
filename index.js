const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sportCenter', {
    useNewUrlParser: true,
    useUnifiedTopology:true,
});

const userRoute = require('./routes/user');

 
const app = express();



app.use(express.json());

userRoute(app)


app.listen(3000, ()=> {
console.log('serveur succesfully launched')
})

