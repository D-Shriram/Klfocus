const mongoose = require('mongoose');

const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database Connected to MongoDB Atlas");
}).catch((err) => {
    console.log("No Connection to Database", err);
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
