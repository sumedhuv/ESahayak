const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const pdtRouter = require("./routes/product");
const staffRouter = require("./routes/staff");
const buypdtsRouter = require("./routes/buypdts");

const sellerRegRouter = require("./routes/seller_register");
const sellerLogRouter = require("./routes/seller_login");
const getemailRouter = require("./routes/getemail");
const addpdtsRouter = require("./routes/addpdts");
const sendmailRouter = require("./routes/sendmail");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({ credentials: true }));
app.use("/public", express.static("public"));

if (!process.env._jwtprivate) {
  console.log("FATAL ERROR : jwtprivate key not defined.");
  process.exit(1);
}

const URI = process.env.URI;

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log("Connected to MongoDB..."))
  .catch((err) => console.log(err));

//all routes for owner
app.use("/", registerRouter);
app.use("/", loginRouter);
app.use("/product", pdtRouter);
app.use("/staff", staffRouter);
app.use("/buypdts", buypdtsRouter);

// all routes for seller
app.use("/buyer", sellerRegRouter);
app.use("/buyer", sellerLogRouter);
app.use("/buyer/one", getemailRouter);
app.use("/buyer", addpdtsRouter);

//send mail
app.use("/sendmail", sendmailRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("uber_c/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "uber_c", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}.`);
});
