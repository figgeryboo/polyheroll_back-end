const cors = require("cors");
const express = require("express");
const diceSetController = require('./controllers/diceSetController')

const app = express();

app.use(cors());
app.use(express.json());
app.use('/dicesets', diceSetController)

app.get("/", (req, res) => {
  res.status(200).send("Polyheroll Home");
});


app.get('*', (req, res) => {
  res.status(404).send('Error: Invalid Route')
})


module.exports = app;