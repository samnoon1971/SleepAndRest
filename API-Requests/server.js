var express = require('express');
var app = express();
const PORT = 3300;
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})
app.get('/url', (req, res, next) => {
    res.json(["ABC", "BCD", "CDA"]);
});

