const mongoose=require("mongoose");
require("dotenv/config");

const express=require("express");
const app=express();
const cors = require("cors");

const contactRouter=require('./Routes/ContactRoutes');

app.use(cors());
app.use(express.json());

app.use("/api/sendMessage",contactRouter);



mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Connection Failed", err));

const port = process.env.PORT || 3005;

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});