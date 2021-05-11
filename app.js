const express = require('express')
const cors = require('cors')
const chalk = require('chalk');
const bodyParser = require('body-parser')
const morgan = require('morgan')
const dbConfig = require('./config/dbconfig')
const routes = require('./routes/route')
const dbcon = require('./db/dbconnect')




const app = express();


// To connect to db else comment it 
dbcon.dbconnect(dbConfig.Userdb);


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
    morgan(
     ':method :url :status :response-time ms'
    ))
app.use('/',routes);




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
 console.log(chalk.blue('listening on port ')+ chalk.green(PORT));
});
