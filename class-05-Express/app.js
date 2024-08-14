import express from "express";

const app = express();
const port = 5100;


app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
