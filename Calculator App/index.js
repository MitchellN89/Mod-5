const express = require("express");
const swagger = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const app = express();
const port = 8050;
const calcRoutes = require("./Routes/calcRoutes.js");

app.use("/api-docs", swagger.serve, swagger.setup(swaggerDocument));
app.use("/calculator", express.static("Public"));
app.use("/calculator", calcRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
