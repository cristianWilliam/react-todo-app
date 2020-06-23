const port = 3003;

// Conversor das requisitas
const bodyParser = require("body-parser");

// Inicializando Express
const express = require("express");
const server = express();

// Habilitando MiddleWare Desenvolvido
const AllowCors = require("./cors");

// Midware para converter requisicoes / Quando uso, server.use, todas as requisições irão utilizar este middleware
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(AllowCors);

server.listen(port, function () {
  console.log(`Backend is running at ${port}`);
});

module.exports = server;
