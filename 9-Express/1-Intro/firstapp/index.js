const express = require('express');
const app = express();

//This will run in any time when comes a request, no matter of what or where
//ALL REQUEST==================================
// app.use((req, res) => {
//     console.log("This is a request!");
//     // res.send('Hello, we got your request. :3');
//     //res.send({ cat: 'Pumba', color: 'gray' });
//     // res.send('<h1> My local host is not working on postman. :(</h1>');
// });

app.get('/', (req, res) => {
    res.send('Welcome to home page!');
});

app.get('/cats', (req, res) => {
    res.send('Meow!');
});

app.post('/cats', (req, res) => {
    res.send('This is a post request to /cats');
});

app.get('/dogs', (req, res) => {
    res.send('Woof!');
});

/// ============ req params ===========
app.get('/r/:subreddit', (req, res) => {
    console.log(req.params);
    const { subreddit } = req.params;
    res.send(`<h1>You're browsing the ${subreddit} subreddit`);
});

app.get('/r/:subreddit/comments/:postId/:postTitle', (req, res) => {
    console.log(req.params);
    const { subreddit, postId, postTitle } = req.params;
    res.send(`<h1>You're browsing the ${subreddit} subreddit </h1>
                <h2> ${postTitle} by [${postId}]</h2>`);

});

//============= req query =================
app.get('/search', (req, res) => {
    const { q } = req.query;
    console.log(req.query);
    if (!q) {
        res.send('Nothing found if nothing searched');
    }
    res.send(`Searching for: ${q}`);
})

app.get('*', (req, res) => {
    res.send('For everything else');
});


app.listen(8080, () => {
    console.log('Listening on port 8080');
});