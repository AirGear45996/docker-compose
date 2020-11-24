/** локально api доступно только внутри docker-compose */

let express = require('express');
let app = express();

app.get('/', function (req, res) {

    res.send('Данные из service-test');
});

//add the router
app.listen(process.env.port || 5000);