/**
 * Required External Modules
 */
const express = require("express");
const routes = require('./routes');
const cors = require('cors');

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */
/* app.get("/", (req, res) => {
 res.status(200).send("WHATABYTE::: Food For Devs");
}); */

/**
 * Routes Definitions
 */

/**
 * Server Activation
 */
app.listen(port, () => {
 console.log(`Listening to requests on http://localhost:${port}`);
});

app.use(cors());
app.use('/', routes);