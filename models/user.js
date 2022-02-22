const mongoose= require('mongoose');

const userSchema = new mongoose.Schema({
     firstName:{"type":String, require: true },
     lastName:{"type":String, require: true },
     dateOfBirth: {"type":Date, require: true },
});

const user = new mongoose.model('user',userSchema );

module.export= user;