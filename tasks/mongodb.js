const { MongoClient, ObjectID } = require("mongodb");
//const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("unable to connect to database");
    }
    const db = client.db(databaseName);
    /*db.collection("users").findOne(
      { _id: new ObjectID("5e4f9ac70dfddf0deb435a01") },
      (error, user) => {
        if (error) {
          return console.log("unable to fetch user");
        }
        console.log(user);
      }
    );
    /* db.collection("users").insertOne({
      name: "barsu1",
      city: "Nairobi"
    });*/
    db.collection("task").insertMany(
      [
        {
          description: "excercise",
          complete: true
        },
        {
          description: "watch pro sports",
          complete: false
        }
      ],
      (error, result) => {
        if (error) {
          return console.log("unable to insert task");
        }
        console.log(result);
      }
    );
  }
);
