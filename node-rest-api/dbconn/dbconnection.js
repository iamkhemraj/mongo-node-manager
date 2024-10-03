const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'mongo-node-mange'; 
const client = new MongoClient(url);

async function dbConnect() {
 
  try {

    let connect = await client.connect();
    let dbconn = connect.db(dbName);
    return dbconn;
  
  } catch (error) {
    return console.log('db connection failed!');
  }
   

}

module.exports = dbConnect;
