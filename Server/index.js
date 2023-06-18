const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')
const ResturantModel = require('./models/Resturants')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(
    'mongodb+srv://mohamedtomoq:4Ucx2IyfGIFtBEwI@cluster0.hnugudw.mongodb.net/MERN-APP?retryWrites=true&w=majority'
)

app.get('/getUsers', (req,res ) =>{
    UserModel.find({}).then(function(users){
        res.json(users)
    }).catch(function(err) {
        res.json(err)
    })
})

app.get('/getResturants', (req,res) =>{
    ResturantModel.find({}).then(function(resturants){
        res.json(resturants)
    }).catch(function(err){
        res.json(err)
    })
})

app.post("/createUser", async (req,res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
    res.json(user);
})

app.post("/createResturant", async (req,res) => {
    const resturant = req.body;
    const newResturant = new ResturantModel(resturant);
    await newResturant.save();
    res.json(resturant);
})


app.listen(3001, () => {
    console.log("server is running on fire")
})