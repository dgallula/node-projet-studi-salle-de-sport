const res = require("express/lib/response");

async function userGet(request,response) {
    res.json('my user');
}

async function userCreate(request,response) {
    
    try{ const user = request.app.get('models').user;
    const newUser = await new user(
        {
            firstname: 'Israel',
            lastName: 'Cohen',
            dateOfBirth: new Date,
        }).save();

    res.json(newUser);
    } catch{(error)
        res.json(error.message)
    }
    
}

module.exports = {userGet , userCreate};

