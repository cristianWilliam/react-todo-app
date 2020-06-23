// Responsável pela conexao para o Mongo
const mongoose = require("mongoose");

// Removendo msg de advertencia pois a API de promisse do mongoose está depreeciada, entãp usamos a api do proprio node
mongoose.Promise = global.Promise;

// Iniciando conexão com o MongoDB
module.exports = mongoose.connect("mongodb://localhost/todo");

console.log("Database has started!");
