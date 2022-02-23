const {userGet, userCreate} = require('../controllers/user')
  // create 
  app.post("/userCreate", userCreate)

  //read 
function userRoute(app){
    app.get('/user', async(request,response)=> {
        res.json('my user', userGet);
    })
}

module.exports = userRoute;

