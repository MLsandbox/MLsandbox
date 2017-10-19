var express = require('express');
var bodyparser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyparser.json());
app.use('/login', (req,res) => {
  console.log('you are trying to log in');
  res.status(200).send('you are trying to log in');
})

app.listen(port, () => console.log("Listening on port " + port));