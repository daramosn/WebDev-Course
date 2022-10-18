const express = require('express');
const app = express();
const path = require('path');

const redditDb = require('./data.json');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/cats', (req, res) => {
    const cats = ['Nieves', 'Pumba', 'Coco', 'Abril', 'Manchas'];
    res.render('cats', { cats });
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const post = redditDb[subreddit];
    res.render('subreddit', { ...post });
})

app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 100) + 1;
    // res.render('random', { rand: num });
    res.render('random', { num });
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
