const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const port = process.env.PORT || 5000
const {signIn,signUp} = require('./controllers/authController')
const { createPost, getAllPosts } = require('./controllers/PostController');
app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.json({
      message: "Hello world!"
    })
})


app.post('/post/:id', createPost);


app.post('/auth/register',signUp);
app.post('/auth/login',signIn);
app.get('/posts',getAllPosts);

app.listen(port, () => {
    mongoose.connect("mongodb+srv://akbaralievbehruz44:user@cluster0.6tpnz02.mongodb.net/yelpApp?retryWrites=true&w=majority",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Successfuly connected to database");
    }).catch((e) => {
        console.log(e);
    })
    console.log(`http://localhost:${port}`);
})