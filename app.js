var scores = [{
    name: "Edwin",
    score: 50
}, {
    name: "David",
    score: 39
}];

// server stuff

var bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/javascript');
    scores.sort((a, b) => (b.score - a.score));
    top3Scores = scores.slice(0, 3);
    res.send(JSON.stringify(top3Scores));
});

app.post('/', (express.json()), (req, res) => {
    res.send('Got a POST request');
    scores.push(req.body);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))