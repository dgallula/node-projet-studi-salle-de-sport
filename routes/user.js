const {userGet} = require('../controllers/user')

function userRoute(app){
    app.get('/user', async(request,response)=> {
        res.json('my user', userGet);
    })
}

module.exports = userRoute;

