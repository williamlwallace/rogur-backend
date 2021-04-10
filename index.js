const express = require('express');
const cors = require('cors');
const InitiateMongoServer = require("./config/db");
const user = require("./routes/user");
const ride = require("./routes/ride");

InitiateMongoServer();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", user);
app.use("/ride", ride)

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'API connected'
  });
});

app.listen(PORT, () => {
  console.log('Server listening');
});