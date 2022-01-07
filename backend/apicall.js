const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const { addMessage, selectMessage } = require("./dbconnection");
const add = require("nodemon/lib/rules/add");

//localhost:4040/usermessage
http: app.get("/usermessage", async (req, res) => {
  const list = await selectMessage();
  res.json(list);
});

//localhost:4040/addmessage
http: app.post("/addmessage", async (req, res) => {
  {
    const msg = req.body;
    await addMessage(msg);
    res.json({ message: "message added succefully" });
  }
});

app.listen(4040, () => {
  console.log("server started");
});
