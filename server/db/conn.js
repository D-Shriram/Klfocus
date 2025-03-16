const mongoose = require('mongoose');

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
});




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
