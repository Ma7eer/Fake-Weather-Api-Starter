const express = require('express'); // import express
const app = express(); // initialize express

// Listen on port 3000
app.listen(3000, function() {
  console.log('listening on port 3000...');
})
