const express = require("express");

const app = express();

app.get("/", (require, Response) =>{

    return Response.send("hello world");

})

app.listen(3333);
