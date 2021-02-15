const express = require('express');
const bodyParser = require('body-parser');
const mongoose =require('mongoose');
const cors = require('cors');

const app = express();

const postRoutes = require('./routes/posts.route')

app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));

app.use(cors());

const URL= 'mongodb+srv://Recall:Jesus4Me!@cluster0.wsnax.mongodb.net/<dbname>?retryWrites=true&w=majority';

const PORT = process.env.PORT||5000

mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>console.log(`Server is running on Port ${PORT}`)))
    .catch((error)=>console.log(`Connection Error ${error}`))

app.use('/posts',postRoutes)
mongoose.set('useFindAndModify',false)