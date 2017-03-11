/**
 * Created by pawan on 3/3/17.
 */

const express = require('express');
const app = express();

app.use(express.static("static"));

app.listen(3000, function () {
    console.log("listening on port 3000")
});
