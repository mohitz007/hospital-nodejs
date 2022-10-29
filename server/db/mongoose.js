var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

mongoose.connect("mongodb://Mohitz_007:Fmk2DJJV7nJFF9co@ac-hlrkpm6-shard-00-00.u189jgt.mongodb.net:27017,ac-hlrkpm6-shard-00-01.u189jgt.mongodb.net:27017,ac-hlrkpm6-shard-00-02.u189jgt.mongodb.net:27017/?ssl=true&replicaSet=atlas-f03503-shard-0&authSource=admin&retryWrites=true&w=majority",{
    useNewUrlParser: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

module.exports = {mongoose};
