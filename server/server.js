import express from 'express';
import { promises as fs } from 'fs';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;
const collectionName = process.env.MONGO_DB_COLLECTION;

const app = express();
app.use(cors()); // Enable CORS for all routes
const PORT = 3000;

// Endpoint to read and send JSON file content
app.get("/socks", async (req, res) => {
    try {
      const client = await MongoClient.connect(url);
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
      const socks = await collection.find({}).toArray();
      res.json(socks);
    } catch (err) {
      console.error("Error:", err);
      res.status(500).send("Hmmm, something smells... No socks for you! ");
    }
  });

  // Middleware to parse JSON bodies
app.use(express.json());
/* DELETED FOR LAB 8
app.post("/socks", async (req, res) => {
  try {
    // Obligatory reference to POST Malone
    console.log(
      "If POST Malone were a sock, he'd be the one with the most colorful pattern.",
    );
    // Simulate creating a user
    const { username, email } = req.body;
    if (!username || !email) {
      // Bad request if username or email is missing
      return res
        .status(400)
        .send({ error: "Username and email are required." });
    }
    // Respond with the created user information and a 201 Created status
    res.status(201).send({
      status: "success",
      location: "http://localhost:3000/users/1234", // This URL should point to the newly created user
      message: "User created successfully.",
    });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Hmmm, something smells... No socks for you! ");
  }
});
*/
app.post('/socks', async (req, res) => {
  try {
      const sock  = req.body;
      const client = await MongoClient.connect(url);
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
      const result = await collection.insertOne(sock);
      res.status(201).send(`{"_id":"${result.insertedId}"}`);
  } catch (err) {
      console.error('Error:', err);
      res.status(500).send('Hmm, something doesn\'t smell right... Error adding sock');
  }
});
/* DELETING FOR LAB 8
app.delete('/socks/:id', async (req, res) => {
    try {
    const { id } = req.params;
    console.log('Deleting sock with ID:', id);
    res.status(200).send('Sock deleted successfully');
    } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Hmm, something doesn\'t smell right... Error deleting sock');
    }
    });
*/
    app.get("/socks/:color", async (req, res) => {
        try {
          const {color} = req.params
         
          const data = await fs.readFile("../data/socks.json", "utf8");
          const jsonObj = JSON.parse(data);
          const returnArray = []

          console.log(jsonObj)
          for(let i = 0; i < jsonObj.length; i++) {
            let obj = jsonObj[i];
        
                if (obj["color"].toLowerCase() === color.toLowerCase()){
                    returnArray.push(obj)
                }
            }
        if (returnArray.length > 0){
            res.json(returnArray)
        }
        else {
            res.status(201).send("No socks with that color")
        }
          
        } catch (err) {
          console.error("Error:", err);
          res.status(500).send("Hmmm, something smells... No socks for you! ");
        }
      });

    app.put("/user/:id", async (req, res) => {
        try {
          const { id } = req.params;
          const { email } = req.body;
          console.log("Updating email for user with ID:", id);
          res.status(200).send({
            status: "success",
            data: email, // This URL should point to the newly created user
            message: "User updated successfully.",
          });
        } catch (err) {
          console.error("Error:", err);
          res
            .status(500)
            .send("Hmm, something doesn't smell right... Error deleting sock");
        }
      });
      app.post('/socks/search', async (req, res) => {
        try {
        // TODO: Add code that can search MongoDB based on a color value
        // from the Search text box.
        const client = await MongoClient.connect(url)
        const db = client.db(dbName)
        const collection = db.collection(collectionName)
        console.log(req.body.searchTerm)
        const socks = await collection.find({"sockDetails.color": req.body.searchTerm}).toArray();
        res.json(socks);



        } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Hmm, something doesn\'t smell right... Error searching for socks');
        }
        });     
        
        app.delete('/socks/:id', async (req, res) => {
          try {
          // TODO: Add code that delete a sock when its delete button is clicked.
          const { id } = req.params;
          const client = await MongoClient.connect(url)
          const db = client.db(dbName)
          const collection = db.collection(collectionName)
          const filter = {_id : new ObjectId(id)}

          console.log(await collection.findOne(filter))
          console.log(id)
          
          const status = await collection.deleteOne(filter)

          console.log("Output: " + JSON.stringify(status))
          
          res.status(201).send("Completed")
          } catch (err) {
          console.error('Error:', err);
          res.status(500).send('Hmm, something doesn\'t smell right... Error deleting sock');
          }
          });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


