const express = require("express");

const routes = espress.Router();

routes.post("/users", (request, Response) =>{
    const body = request.body;

    console.log(body);

    return Response.json({
        evento: "semana omnistack",
        aluno: "juan gomes"
    });
});

module.exports = routes;

