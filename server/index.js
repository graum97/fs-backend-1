const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    console.log('in "api/users/" endpoint callback');
    res.status(200).send(friends);
})

app.get("/weather/:temperature", (req, res) =>  {
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
})

const SERVER_PORT = 4000;
app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`));