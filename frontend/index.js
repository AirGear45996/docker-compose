let express = require('express');
let app = express();

app.get('/', async function (req, res) {
    res.sendFile( __dirname + '/public/index.html');
});

//add the router
app.listen(process.env.port || 9000);