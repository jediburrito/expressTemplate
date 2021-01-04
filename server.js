const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv/config')

const app = express();
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.json());

//Import Routes
const routes = require('./routes/routes');

app.use('/', routes);
app.use('/route', routes);



//Connect To DB
mongoose.connect( process.env.DB_CONNECTION, {useUnifiedTopology: true, useNewUrlParser: true}, () =>
console.log('connected to db')
);

// set port, listen for requests
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});