import express from "express";

const app = express();
const port = 5100;

//app.get
app.get("/", (req, res) => {
  console.log("user hit the web");
  res.status(200).send("Hello");
});
app.get("/about", (req, res) => {
  res.status(200).send("about");
});
app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
