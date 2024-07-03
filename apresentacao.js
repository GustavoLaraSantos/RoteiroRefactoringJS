let formatarMoeda = require("./util.js");

module.exports = function gerarFaturaStr(fatura, calc) {
  let faturaStr = `Fatura ${fatura.cliente}\n`;
  for (let apre of fatura.apresentacoes) {
    faturaStr += `  ${calc.repo.getPeca(apre).nome}: ${formatarMoeda(
      calc.calcularTotalApresentacao(apre)
    )} (${apre.audiencia} assentos)\n`;
  }
  faturaStr += `Valor total: ${formatarMoeda(
    calc.calcularTotalFatura(fatura.apresentacoes)
  )}\n`;
  faturaStr += `Créditos acumulados: ${calc.calcularTotalCreditos(
    fatura.apresentacoes
  )} \n`;
  return faturaStr;
};

function gerarFaturaHTML(fatura, pecas) {
  let faturaHTML = `<html>\n<p> Fatura ${fatura.cliente} </p>\n<ul>\n`;
  for (let apre of fatura.apresentacoes) {
    faturaHTML += `<li>  ${getPeca(apre, pecas).nome}: ${formatarMoeda(
      calc.calcularTotalApresentacao(apre, pecas)
    )} (${apre.audiencia} assentos) </li>\n`;
  }
  faturaHTML += `</ul>\n<p> Valor total: ${formatarMoeda(
    calc.calcularTotalFatura(fatura.apresentacoes, pecas)
  )} </p>\n`;
  faturaHTML += `<p> Créditos acumulados: ${calc.calcularTotalCreditos(
    fatura.apresentacoes,
    pecas
  )} </p>\n</html>`;
  return faturaHTML;
}
