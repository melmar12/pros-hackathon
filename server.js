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

    res.send(getResults(query.start.toLowerCase(), query.end.toLowerCase()))
})


// helper functions
// function getData(city) {
//     let data = db.Everything
//     let result = []
//     for(let i in data){
//        if(data[i].userInput === city){
//             result.push(data[i])
//         }
//     }
//     return result
// }

getResults("Houston","Chicago")
function getResults(start, end)
{
    let airports = db.Location;
    let routes = db.Route;
    let startAirports = []
    let endAirports = []
    let results = []

    for(let i in airports)
    {
        if(airports[i].city.toLowerCase() === start)
        {
            startAirports.push(airports[i].airportCode)
        }
        if(airports[i].city.toLowerCase() === end)
        {
            endAirports.push(airports[i].airportCode)
        }
    }
    console.log(start + ": " + startAirports)
    console.log(end + ": " + endAirports)

    for(let i in routes)
    {
        if(startAirports.includes(routes[i].start)
            && endAirports.includes(routes[i].end))
        {
            results.push(routes[i])
        }
    }
    console.log(results)
    return results;
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
