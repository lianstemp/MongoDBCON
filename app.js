const express = require("express");
const mongoose = require("mongoose");
const fs        = require('fs')
const path      = require('path')
const env       = require('./env')
const blogRouter = require("./routes/BlogRoutes");

const app = express();


const clusterUrl = `mongodb://${env.mongoose.username}:${env.mongoose.password}@${env.mongoose.host}:${env.mongoose.port || '27017'}/${env.mongoose.database}?tls=true&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false`
const ca = `${path.join(__dirname, `./ssl/${ env.mongoose.cert || 'rds-combined-ca-bundle.pem'}`)}`


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/blogs", blogRouter);

  //configure mongoose
  mongoose.connect(`${clusterUrl}`, {
      tlsCAFile: `${ca}`,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Connected to MongoDB");
      }
    }
  );

// //configure mongoose
// mongoose.connect(
//   //process.env.MONGODB_URI || 
//   "mongodb://127.0.0.1:27017/blog",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Connected to MongoDB");
//     }
//   }
// );

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});

module.exports = app;
