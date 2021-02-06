import express from 'express';

//instance express
const app = express;

//set port
const port= 4000;

//configure environnement
app.use(express.json());

//define routes
app.get('/' (req,res) =>{
    res.send({message: 'welcome'});
});

// use my routes
app.use('/user',userRoute);
