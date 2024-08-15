const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route");

const app = express();
const port = 3000;

// middleware configuration
app.use(express.json()); // to get express use json request body by defualt it doesnt
app.use(express.urlencoded({ extended: false }));

// routes

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from node api");
});

//begginer example
// app.get("/api/products/:id", async (req, res) => {
//   console.log(req.body);
//   try {
//     const { id } = req.params;

//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//     console.log();
//   }
// });

mongoose
  .connect(
    "mongodb+srv://jqproject1:tiYS3oyrDUHD6CKj@jqclustor1.p11vbky.mongodb.net/?retryWrites=true&w=majority&appName=jqClustor1"
  )
  .then(() => {
    console.log("Connected to the database");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch(() => {
    console.log(`connection is failed`);
  });
