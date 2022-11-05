const express = require('express');
var cors = require('cors');
const app = express();
const port = 80;

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors({
    origin: '*'
}));

app.options('/user', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.end();
  });

//routes
const userRoute = require('./routes/user.route');
app.use('/user', userRoute);

//server listen
app.listen(port, () => console.log(`.Escuchando en puerto ${port}`));