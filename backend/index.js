const express = require('express');
const app = express();


require("dotenv").config();
// Modern Express
app.use(express.json()); // Parse JSON requests


const PORT = process.env.PORT || 4000;


const allroute = require("./routes/product_route");
 app.use("/api/v1", allroute);


 require("./config/database").connect();

app.listen(PORT, () => {
    console.log(`App is runningfef on port ${PORT}`);
});
