const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
uuid();
const methodOverride = require('method-override');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response");
})

let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'Thats funny lol'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'WTF????'
    },
    {
        id: uuid(),
        username: 'Walter',
        comment: `I'm the danger`
    },
    {
        id: uuid(),
        username: 'Hank',
        comment: '<8-)'
    },
];

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
});

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
});

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    // comments.push(req.body);
    comments.push({ id: uuid(), username, comment });
    res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(x => x.id === id);
    res.render('comments/show', { comment });
});

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newComment = req.body.comment;
    const foundComment = comments.find(x => x.id === id);
    foundComment.comment = newComment;
    res.redirect('/comments');
});

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    console.log('Working');
    res.redirect('/comments');
});

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(x => x.id === id);
    res.render('comments/edit', { comment });
});

//========================================
app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    // res.send("post /tacos response");
    res.send(`Your order is ${qty} ${meat}`);
    console.log(req.body);
})

app.listen(3000, () => {
    console.log('On port 3000');
});