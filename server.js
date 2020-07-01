const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
let db = require('./data/db.json');

app.use(cors());
app.use(bodyParser.json());


app.get('/db', function(req, res) {
    res.send(db);
});

app.get('/db/:query', function(req, res) {
    let query = JSON.parse(req.params.query)
    let city = query.city
    res.send(getData(city));
});


// helper functions
function getData(city) {
    let data = db.Sample;
    let result = [];
    for(let i in data){
       if(data[i].city === city){
            result.push(data[i]);
        }
    }
    return result;
}

// serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 4000;

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
