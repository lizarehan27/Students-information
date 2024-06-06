const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/registration", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => {
    console.log("Connected successful");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});
