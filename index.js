const express = require("express")
const path = require("path")

const app = express();
app.use(express.json());

// app.use(express.static(path.join(__dirname, "static")))
app.use("/", require(path.join(__dirname, "routes/blog.js")))

// app.get("/" , (req, res) => {
//     res.send("Hello world")
// })

// app.get("/about/:name", (req,res) => [
//     res.send("about page" + req.params.name)
// ])

app.listen(8000, (req,res) => {
    console.log("server is running at port http://localhost:8000")
})