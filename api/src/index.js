const cors = require('cors');
const express = require("express")
const app = express()

const usersRouter = require("./routes/user")

const PORT = 9000


require("dotenv").config()

const mongoose = require("mongoose")
mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://pgonzales7:bullones123456@cluster0.jxdj3hm.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("Base de datos conectada"))
  .catch((error) => console.log(error))


app.use(express.json())
app.use(cors())
app.use("/api", usersRouter)


app.get("/", (req, res) => {
  res.send("Hola")
})



app.listen(PORT, () => {
  console.log(`Puerto listo, http://localhost:${PORT}`)
})

