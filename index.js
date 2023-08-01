const express = require("express");

const app = express()

const port = process.env.PORT || 3000;

app.get("/", (req, res, next) => {
    res.send("hey there not so ")
})

app.listen(port, () => console.log(`listening on ${port}`))