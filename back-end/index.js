const express = require("express");

const app = express();

app.get("/users", (require, Response) =>{
    const params = request.query; 
    console.console.log(params);
    
    return Response.json({
        evento: "semana omnistack",
        aluno: "juan gomes"
    });

});



app.listen(3333);
