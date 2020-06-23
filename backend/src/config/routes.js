const express = require("express");

module.exports = function (server) {
  // API Routes
  const router = express.Router();

  // Middleware especifico para urls que começam com /api
  server.use("/api", router);

  // Todo Routes
  const todoService = require("../api/todo/todoService");

  // Metodo register utiliza todos os metodos declarados no array de metodos.
  // Cria dentro do Router, irá criar a web service com a url '/todos' com base
  todoService.register(router, "/todos");
};
