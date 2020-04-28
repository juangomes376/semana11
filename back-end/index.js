const express = require("express");

const app = express();

app.get("/users/:id", (request, Response) =>{
    const params = request.params;

    console.log(params);

    return Response.json({
        evento: "semana omnistack",
        aluno: "juan gomes"
    });
});



app.listen(3333);
