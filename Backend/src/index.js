const express = require('express');
var cors = require('cors');
const app = express();
const port = 80;

app.use(cors());
app.use(cors({
    origin: '*'
}));


//routes
const userRoute = require('./routes/user.route');
app.use('/user', userRoute);

//server listen
app.listen(port, () => console.log(`.Escuchando en puerto ${port}`));