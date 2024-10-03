const dbConnect = require("./dbconn/dbconnection");


// insertData();
// async function insertData() {
//   try {
//     let db = await dbConnect();
//     let collection = db.collection('admin');

//     // Inserting data (name, email, password)
//     let data = await collection.insertOne({
//       name: "John Doe",
//       email: "johndoe@example.com",
//       password: "securepassword123"
//     });

//     console.log('Data inserted:', data);
//   } catch (error) {
//     console.error('Error inserting data:', error);
//   }
// }


fetchData();
async function fetchData() {
  try {
    let db = await dbConnect();
    let collection = db.collection('admin');
    let data = await collection.find().toArray();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


