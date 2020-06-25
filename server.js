const express = require('express');
const app = express();

// Run the app by serving the static files in the default directory
app.use(express.static(__dirname));

// Start the app by listening on the default
app.listen(4201, () => {
  console.log('AWAX APP is running in port 4201');
  });
