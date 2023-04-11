const express = require("express")

const routes = express.Router()


let lista = [   {"id":1,"nome":"João","idade":20},
            {"id":2,"nome":"Pedro","idade":19},
            {"id":3,"nome":"José","idade":21}];

routes.get("/",(req,res)=>{
    res.status(200).json(lista);
});

routes.get("/:id",(req,res)=>{
    res.status(200).json(lista[req.params.id-1]);
});

module.exports = routes

//excluir registro da lista:
routes.delete("/:id",(req,res)=>{
    lista.splice(req.params.id-1,1)
    res.status(200).redirect("/")
})