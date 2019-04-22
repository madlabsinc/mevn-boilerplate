import Sequelize from 'sequelize';
import Mongoose from 'mongoose';

/**
 * Below is your Mongodb, MySQL Connection 
 * Uncomment to use any database of your choice
 * 
 * Note:
 * Mongodb => Make your mongodb server is running
 * MySQL => Make your mysql server is running  
 * 
 * Getting Started wit Sequelize
 * Sequelizejs Docs [http://docs.sequelizejs.com/manual/getting-started.html]
 * 
 * */ 

 
/**
 * Default Mongodb Connection 
exports.Mongodb = () => Mongoose.connect('mongodb://username:password@host:27017/databse_name',{ useNewUrlParser: true }, 
    function(err) {
        if (err) throw err;
        console.log('Connection established to MongoDB');
    }
)
*/

/**
 * Default MySql Connection
exports.MySQL = () => new Sequelize('mysql://username:password@host:3306/datbase_name')
    .authenticate()
    .then(() => {
        console.log('MySQL, Connection has been established successfully.');
    })
    .catch(err => {
        console.error('MySQL, Unable to connect to the database:', err);
    });
*/