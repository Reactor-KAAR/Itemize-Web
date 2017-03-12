const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, '../client/')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

// Listen to our port
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
})

module.exports = app;
