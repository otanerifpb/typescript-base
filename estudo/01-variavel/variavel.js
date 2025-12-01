"use strict";
// Sempre salvar o código seja depois de criar/atualizar
// Antes de compilar executar no Terminal/Power Shell "npx tsc" para converter os "arquivos.ts" em "arquivos.js"
// Para compilar um "arquivo.js" estando dentro da pasta usar: "node nomeArquivo.js" no Terminal/Power Shell
// Para compilar um "arquivo.js" esntando fora da pasta usar: "node nomePasta\nomeArquivo.js" no Terminal/Power Shell
Object.defineProperty(exports, "__esModule", { value: true });
// $ npx tsc      		         [converte os "arquivos.ts" para "arquivos.js", cria os arquivos necessários para compilar o código]
// $ tsc index.js 		         [para ver o resultado do código no arquivo "index.js", rodar/executar o código dentro da pasta]
// $ node nomePasta\arquivo.js [para rodar o código sem está dentro da pasta]
// ----------------Tipo para o valor que a variável vai receber: string; number; boolean; null; any; ...
// string   [nomes, sempre entre "nome"]
// number   [números inteiros]
// boolean  [pode ser atribuído 2 valores lógicos "true ou false"]
// null     [valor ainda não foi informado]
// any      [pode ser de qualquer tipo]
const rep = 50;
const str = 20;
console.log("-".repeat(rep));
console.log("-".repeat(str), " Start ", "-".repeat(str));
console.log("-".repeat(rep));
console.log();
// const    [ao usar antes da variável o valor atribuído não pode ser mudada, ex: Pi]
// let      [ao usar antes da variável, o valor atribuído pode ser mudado a qualquer momento]
const nome = "Renato";
console.log(nome);
console.log("-".repeat(rep));
let resultado = "Iniciado";
console.log(resultado);
if (true) {
    let temp = "Valor Temporário"; // Variável 'temp' só existe aqui
    resultado = temp;
    console.log(temp, "do if");
}
// console.log(temp); // ERRO: 'temp' não está definida fora do bloco IF
console.log(resultado); // Saída: Valor Temporário (variável 'resultado' é visível globalmente)
console.log("-".repeat(rep));
// Crtl + espaço: mostra as opções do campo
const pessoa = {
    nome: "Renato",
    idade: 37,
    genero: "masculino"
};
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.genero);
console.log("-".repeat(rep));
// ----------------Concatenar uma variável junto de um texto
let nom = 'João';
let frase = `Olá ${nom}, tudo bem com você!`; // Para concatenar uma variável ela precisa esta entre "crase" e a variável "${...}"
console.log(frase);
console.log("-".repeat(rep));
// ----------------Visibilidade de uma variável: private; protected; public(Defeult); readonly
// private'+' 	      [só pode ser acessado dentro da classe, nem a filha pode acessar, para tal usar Gets/Sets]
// protected'-' 	    [pode ser acessada dentro da classe ou suas filhas e derivadas]
// public(Default)'#' [pode ser acessada de qualquer lugar, e não precisa está escrito antes do atributo] 
// readonly           [quando usado a variável é executada 1 única vez ou apenas leitura se {readOnly}, e não pode ser alterada]
// ----------------End Code
console.log();
console.log("-".repeat(rep));
console.log("-".repeat(str), " Finish ", "-".repeat(str));
console.log("-".repeat(rep));
//# sourceMappingURL=variavel.js.map