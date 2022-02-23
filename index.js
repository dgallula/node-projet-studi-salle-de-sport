const express = require('express');
const mongoose = require('mongoose');

const models= require('/models');
console.log(models)


mongoose.connect('mongodb://localhost/sportCenter', {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex: true,
});

const userRoute = require('./routes/user');

 
const app = express();
app.set('models',models);



app.use(express.json());

userRoute(app)


app.listen(3000, ()=> {
console.log('serveur succesfully launched')
})

