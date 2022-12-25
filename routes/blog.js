const express = require("express")
const path = require("path")
const router = express.Router()

const app = express();

router.get("/", (req , res) => {
    res.send("Welcome to homepage")
})

router.get("/about", (req , res) => {
    res.sendFile(path.join(__dirname,"../templates/index.html"))
})


module.exports = router;