const path = require("path");

const express = require("express");

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.listen(app.get("port"), () => console.log("LISTENING ON:", app.get("port")));