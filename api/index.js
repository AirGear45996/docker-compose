/** Публичное api доступно всем */

let express = require('express');
let app = express();
let axios = require('axios');

//region кросс доменные запросы
const cors = require('cors');
app.use(cors());
//endregion

const HOST_SERVICE_TEST = process.env.HOST_SERVICE_TEST || 'http://localhost:5000/';

app.get('/', async function (req, res) {
    const data = (await axios.get(HOST_SERVICE_TEST)).data;
    const result = {
        test: 'Hello world =) 12',
        env: process.env,
        data,
    };
    res.json(result)
    //res.send('test');
});

//add the router
app.listen(process.env.port || 8080);