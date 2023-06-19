const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')
const ResturantModel = require('./models/Resturants');
const CountryModel = require('./models/Countries');

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

app.get('/getCountries', (req,res) =>{
    CountryModel.find({}).then(function(countries){
        res.json(countries)
    }).catch(function(err){
        res.json(err)
    })

})
app.get('/getCountries/:alpha2Code', (req,res) =>{
    const alpha2Code = req.params.alpha2Code;

    CountryModel.findOne({alpha2Code}).then(function(country){
        if(!country){
            return res.status(405).send("cant find")
        }
            res.json(country);
        
        
    }).catch(function(err){
        res.json(err)
    });

});

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

app.post("/createCountry", async (req,res) => {
    const country = req.body;
    const newCountry = new CountryModel(country);
    await newCountry.save();
    res.json(country);
})





app.listen(3005, () => {
    console.log("server is running on fire")
})