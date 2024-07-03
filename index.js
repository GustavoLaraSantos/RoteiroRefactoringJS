const { readFileSync } = require("fs");
let Repositorio = require("./repositorio.js");
let ServicoCalculoFatura = require("./servico.js");
let gerarFaturaStr = require("./apresentacao.js");

const faturas = JSON.parse(readFileSync("./faturas.json"));
const calc = new ServicoCalculoFatura(new Repositorio());
const faturaStr = gerarFaturaStr(faturas, calc);
console.log(faturaStr);
