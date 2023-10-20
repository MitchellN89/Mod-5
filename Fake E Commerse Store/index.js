const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes/routes");

const swagger = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.use("/", routes);
app.use("/", express.static("public"));
app.use("/api-docs", swagger.serve, swagger.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Fake E Commerse Store -  Listening on port ${port}`);
});
