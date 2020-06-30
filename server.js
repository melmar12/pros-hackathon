const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/db')

let Airport = require('./airport.model');

app.use(cors());
app.use(bodyParser.json());


// Connect DB
connectDB()

const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})



// can put this in separate a routes file
const airportRoutes = express.Router();

// GET all airports
airportRoutes.route('/').get(function(req, res) {
    Airport.find(function(err, airports) {
        if (err) {
            console.log(err);
        } else {
            res.json(airports);
        }
    });
});

// GET airport by id
airportRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Airport.findById(id, function(err, airport) {
        res.json(airport);
    });
});

// POST update
// postRoutes.route('/update/:id').post(function(req, res) {
//     Post.findById(req.params.id, function(err, post) {
//         if (!post)
//             res.status(404).send("data is not found");
//         else
//             post.username = req.body.username;
//         post.location = req.body.location;
//         post.hashtags = req.body.hashtags;
//
//         post.save().then(post => {
//             res.json('Post updated!');
//         })
//             .catch(err => {
//                 res.status(400).send("Update not possible");
//             });
//     });
// });

// POST add airport
airportRoutes.route('/add').post(function(req, res) {
    let airport = new Airport(req.body);
    airport.save()
        .then(airport => {
            res.status(200).json({'airport': 'airport added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new airport failed');
        });
});

// ALGORITHM
// search query algorithm
// postRoutes.route('/search/:query').get(function(req, res) {
//     // relys on frontend to pass a correctly formatted query...
//     let query = JSON.parse(req.params.query)
//     let tags = query.hashtags
//     let username = query.username
//     let location = query.location
//
//     // determines what type of search query to run...
//     if(tags){ // need to check for tags bc the $all: operator will be used in search
//         if(username && location) {
//             // all three: tags, username and location
//             Post.find({"hashtags": {$all: tags }, "username": username, "location": location}, function(err, post) {
//                 if(!post) {
//                     res.status(404).send("not found");
//                 }
//                 else {
//                     res.json(post);
//                 }
//             }).catch(err => {
//                 res.status(400).send("not possible");
//             });
//         } else if (username && !location){
//             // tags and username
//             Post.find({"hashtags": {$all: tags }, "username": username}, function(err, post) {
//                 if(!post) {
//                     res.status(404).send("not found");
//                 }
//                 else {
//                     res.json(post);
//                 }
//             }).catch(err => {
//                 res.status(400).send("not possible");
//             });
//         } else if (!username && location) {
//             // tags and location
//             Post.find({"hashtags": {$all: tags }, "location": location}, function(err, post) {
//                 if(!post) {
//                     res.status(404).send("not found");
//                 }
//                 else {
//                     res.json(post);
//                 }
//             }).catch(err => {
//                 res.status(400).send("not possible");
//             });
//         } else {
//             // just tags
//             Post.find({"hashtags": {$all: tags }}, function(err, post) {
//                 if(!post) {
//                     res.status(404).send("not found");
//                 }
//                 else {
//                     res.json(post);
//                 }
//             }).catch(err => {
//                 res.status(400).send("not possible");
//             });
//         }
//     } else {
//         // either location and username, just location or just username
//         // not necessary to alter query
//         Post.find(query, function(err, post) {
//             if(!post)
//                 res.status(404).send("not found");
//             else {
//                 res.json(post);
//             }
//         }).catch(err => {
//             res.status(400).send("not possible");
//         });
//         // wish i could make this smaller lol
//     }
// });
// end file



// Define Route(s)
app.use('/airports', airportRoutes);

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
