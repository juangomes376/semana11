const express = require("express");
const crypto = require("crypto");
const conection = require("./database/conection");
const routes = express.Router();

routes.post("/ongs", (request, Response) =>{
     const { name, email, whatsapp, city, uf} = request.body;
    
     const id = crypto.randomBytes(4).toString("HEX");

     conection("ongs").insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
        
    })
    
    return Response.json({id} );
});

module.exports = routes;

