const express = require('express');
var cors = require('cors');
const app = express();
const port = 4000;

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors({
    origin: '*'
}));


//routes
const userRoute = require('./routes/user.route');
app.use('/user', userRoute);

//server listen
app.listen(port, () => console.log(`.Escuchando en puerto ${port}`));