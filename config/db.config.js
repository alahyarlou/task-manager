const { default: mongoose } = require("mongoose");

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("connect to mongodb is successfully"))
  .catch((err) => console.log(`error databse:${err?.message}`));
