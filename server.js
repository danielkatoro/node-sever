import express from 'express'
import userRoute from (./routes/userRoute.js);

const app = express; //instance express

const port= 4000; //set port

app.use(express.json()); //configure environnement

//define routes
app.get('/' (req,res) =>{
    res.send({message: 'welcome'});
});

// use my routes
app.use('/user',userRoute);

app.listern(port, () => {
    console.log(`server running on htpp://localhost:${port}`);
});