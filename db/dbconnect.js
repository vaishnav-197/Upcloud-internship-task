
const mongoose = require('mongoose')






let dbconnect = (Userdb) => {
    
mongoose
.connect(
  Userdb,
  {   useNewUrlParser: true ,
      useUnifiedTopology: true,
      useFindAndModify: false
  }
)
.then(() => console.log('MongoDB  Connected'))
.catch(err => console.log(err));

}


module.exports.dbconnect = dbconnect


