const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
require('dotenv').config();

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@webdevelopment.n5exjy3.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const db = client.db("toy");
    const collection = db.collection("toy-collection");
    const toys = await collection.find({}).toArray();
    app.get('/', (req, res) => {
      res.send(toys);
    });
    app.get('/viewdetails/:id', async (req, res) => {
      const toyId = req.params.id;
      const singleToy = await collection.findOne({_id : new ObjectId(toyId)})
      res.send(singleToy);
    })

  } catch(error) {
    console.log(error);
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`I am listening at port ${port}`);
});
