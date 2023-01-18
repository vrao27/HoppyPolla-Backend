const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const brewrecipeRoutes = require("./routes/brewrecipes.js");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user.js");
// Set the strictQuery option to false
mongoose.set("strictQuery", false);
const port = process.env.PORT || 5000;

//setting up basic middleware and ivoking next so the following steps will be carried out
//we can log the path and request
app.use(bodyParser.json());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(cors({ origin: "https://stupendous-torrone-fe3419.netlify.app", credentials: true }));

//routes
app.use("/api/brewrecipes", brewrecipeRoutes);
app.use("/api/user", userRoutes);

//connect to db
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     //Port listen to requests
//     app.listen(process.env.PORT, () => {
//       console.log(`Server listening on port`, process.env.PORT);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    //Port listen to requests
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
