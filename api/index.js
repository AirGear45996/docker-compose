/** Публичное api доступно всем */

let express = require('express');
let app = express();

let mysql = require('mysql2');
let axios = require('axios');

//region db
const pool = mysql.createPool({
    connectionLimit: 5,
    host: "db",
    user: "user",
    database: "mydb",
    password: "password"
});
//endregion

//region кросс доменные запросы
const cors = require('cors');
app.use(cors());
//endregion

const HOST_SERVICE_TEST = process.env.HOST_SERVICE_TEST || 'http://localhost:5000/';

app.get('/', async function (req, res) {
    //const data = (await axios.get(HOST_SERVICE_TEST)).data;
    pool.query("SELECT * FROM test", function(err, data) {
        if(err) return console.log(err);
        const result = {
            test: 'Hello world =) 123',
            env: process.env,
            data,
        };
        res.json(result);
    });
});

//add the router
let port = process.env.port || 8080;
app.listen(port, () => {

    console.log('Server has been started, port' + port);

});