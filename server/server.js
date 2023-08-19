const express = require('express');
require('dotenv').config();
const db = require('./db');
const userRoutes = require('./routes/user.routes')
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const Port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());


app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);


db.myDb();

app.listen(Port, () => {
    console.log(`Server is running on the port ${Port}`);
}
);

app.use('/api/v1/user', userRoutes)

