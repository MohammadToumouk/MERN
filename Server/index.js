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
/* Fetching the Data */
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
app.get('/getCountries/:alpha2', (req,res) =>{
    const alpha2 = req.params.alpha2;

    CountryModel.findOne({alpha2}).then(function(country){
        if(!country){
            return res.status(405).send("cant find")
        }
            res.json(country);
        
        
    }).catch(function(err){
        res.json(err)
    });

});

/* Creating the Data */

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

/* Updating the Data */

app.put("/updateUser/:name", async (req,res) => {
    const {name} = req.params;
    const updatedUser = req.body;

    try{
        const user = await UserModel.findOneAndReplace({name}, updatedUser, {
            new:true,
        });
        if(!user){
            res.status(404).send("cant find any matching usernames")
        }
        res.json(user)
    } catch(err){
        console.log(err)
        res.status(500)
    }

});

/* Deleting the Data */

app.delete("/deleteUser/:name", async (req,res) => {
    const {name} = req.params;
    
    try{
        const deletedUser = await UserModel.findOneAndDelete({name});
        if(!deletedUser){
            res.status(404).send("fuck off nothing got deleted");
        }
        res.json({message: "User deleted successfully"});
    } catch (err) {
        console.log(err)
        res.status(500)
    }
    
});

app.listen(3009, () => {
    console.log("server is running on fire")
})



