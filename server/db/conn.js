const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://shriram:2200032943@cluster0.gdr96.mongodb.net/resolvance?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
  console.log("Connected to MongoDB Atlas");
}).catch((err) => {
  console.log("No Connection to MongoDB Atlas", err);
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
