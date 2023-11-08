const app = require("./src/app");
const { db } = require("./db/connection");
const musiciansRouter = require("./routes/musicians");
const port = 3000;

app.use("/musicians", musiciansRouter);

app.listen(port, () => {
  db.sync();
  console.log(`Listening at http://localhost:${port}/musicians`);
});
