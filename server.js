const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST", "PUT"],
    credentials: true,
  })
);

app.put("/data", (req, res) => {
  res.json({ name: "Himanshu", favoirteFood: "Burger" });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`server started at Port: ${PORT}`));
