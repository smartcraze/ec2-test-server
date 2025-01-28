const express = require("express")

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.json({
        message: "Hello from Ec2 instance",
        time: new Date().toISOString(),

    })
})

app.get("/:name", (req, res) => {
    res.json({
        message: `Hello ${req.params.name}`,
        time: new Date().toISOString(),

    })

})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})