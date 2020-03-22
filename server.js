const express = require('express');
const app = express();
const mongoose = require('mongoose')
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/public/dist/public'));
mongoose.connect('mongodb://localhost/RestfulTaskCRUD', {useNewUrlParser: true});
require('./server/config/routes.js')(app)


app.listen(8001, () => console.log("listening on port 8001"))