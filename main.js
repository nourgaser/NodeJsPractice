const fs = require('fs');
const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.json());

///////////////////////////////
var data = JSON.parse(fs.readFileSync('./db/data.json'));
app.post('/adddata', (req, res) => {
    data.courses.push(req.body);
    fs.writeFileSync('./db/data.json', JSON.stringify(data,null,2));
    res.send({ message: "success" });
})

app.get('/api/allcourses', (req, res) => {
    console.log("from app.get... sending data...");
    res.json(data);
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));