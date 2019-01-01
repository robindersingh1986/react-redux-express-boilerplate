const express = require('express');
const app = express();
const HTTP_PORT = process.env.HTTP_PORT || 3000;
const HOST = process.env.HOST || null;

app.use(express.json());

app.get('*', (req, res) => {
  res.send("Welcome to app");
});

//start server
app.listen(HTTP_PORT, HOST, error => {
  if (!error) {
    console.log(`Server Started at ${HOST} @ port : ${HTTP_PORT}`);
  } else if (error) {
    console.log(`Error encountered : ${error}`);
  }
})
