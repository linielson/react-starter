// Section 1
const express = require('express');
// Section 2
const app = express();
// Section 3
app.get('/', (req, res) => {
 res.send("<h1>Home page</h1>");
});
// Section 4
app.listen(3000, () => {
 console.log('server started on port 3000');
});
