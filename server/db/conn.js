const mongoose = require('mongoose');

<<<<<<< HEAD
mongoose.connect('mongodb+srv://shriram:2200032943@cluster0.gdr96.mongodb.net/resolvance?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
  console.log("Connected to MongoDB Atlas");
}).catch((err) => {
  console.log("No Connection to MongoDB Atlas", err);
=======
<<<<<<< HEAD
// MongoDB Atlas URI
const dbURIAtlas = "mongodb+srv://shriramuchiha66:2200032943@cluster0.gdr96.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Local MongoDB URI
const dbURILocal = "mongodb://localhost:27017/resolvance";

// Connect to MongoDB Atlas
mongoose.connect(dbURIAtlas, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB Atlas");
}).catch((err) => {
    console.log("Failed to connect to MongoDB Atlas:", err);
});

// Connect to local MongoDB
mongoose.connect(dbURILocal, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to Local MongoDB");
}).catch((err) => {
    console.log("Failed to connect to Local MongoDB:", err);
>>>>>>> c505d60cc7272f53c68c681e92331ff68f7b7439
});



<<<<<<< HEAD
=======

=======
const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database Connected to MongoDB Atlas");
}).catch((err) => {
    console.log("No Connection to Database", err);
});

>>>>>>> 7d7aefbbb398a40eb1e067303007be1d7c8015d9
>>>>>>> c505d60cc7272f53c68c681e92331ff68f7b7439
// const mongoose=require('mongoose');

// mongoose.connect("mongodb://localhost:27017/resolvance",
// {useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify:false
// }).then(()=>{
//     console.log("Database Connected ");
// }).catch((err)=>{
//     console.log("No Connection to Database");
// })


// const mongoose = require('mongoose');


// const dbURI = "mongodb+srv://shriramuchiha66:2200032943@cluster0.efbivmd.mongodb.net/resolvance?retryWrites=true&w=majority&appName=Cluster0";

// mongoose.connect(dbURI, {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// }).then(() => {
//     console.log("Database Connected to MongoDB Atlas");
// }).catch((err) => {
//     console.log("No Connection to Database", err);
// });
