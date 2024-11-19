const cloudinary = require("cloudinary");
const expressFileUpload = require("express-fileupload");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const connectDB = require("./Config/connection");
const userRoutes = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const categoryRoute = require("./routes/categoryRoute");
require('dotenv').config();

//Body Parser
app.use(bodyParser.urlencoded({ limit: "200mb", extended: true }));

//Cookies Parser
app.use(cookieParser());

const MONGO_URI = "mongodb+srv://hemasubbu08:hesu0801@cluster0.m1roj.mongodb.net/webapp?retryWrites=true&w=majority&appName=Cluster0"; 

//Database Connect
connectDB(MONGO_URI);
//JSON
app.use(express.json());

//Use Express File Upload
app.use(expressFileUpload());
console.log(process.env.CLOUD_NAME);
//Config Cloudniary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET_KEY,
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, "localhost", () => {
  console.log(`Server Running At http://localhost:${PORT}`);
});

//Load Route
app.use("/api/user", userRoutes);
app.use("/api/product", productRoute);
app.use("/api/category", categoryRoute);