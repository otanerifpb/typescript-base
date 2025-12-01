// $ npx tsc      		       [converte os "arquivos.ts" para "arquivos.js", cria os arquivos necessários para compilar o código]
// $ tsc index.js 		       [para ver o resultado do código no arquivo "index.js", rodar/executar o código dentro da pasta]
// $ node nomePasta\arquivo.js [para rodar o código sem está dentro da pasta]
// ---------Tipor primitivos
// ----------------String
var rep = 60;
var str = 25;
// console.log("-".repeat(rep));
// console.log("-".repeat(str), " Start ", "-".repeat(str));
// console.log("-".repeat(rep));
console.log();
var nome = 'João'; // Pode ser usado entre plica: '...'
var frase = "TypeScript é incrível"; // Pode ser usado com aspas: "..."
var msg = "Ol\u00E1 ".concat(nome, ", ").concat(frase, "!"); // Para concatenar texto + variável com uso da cráse: `...+...`
console.log(msg);
// ----------------Number
var inteiro = 42; // Números Inteiros
var decimal = 3.14; // Números Fracionados, ou Flutuantes com separador por ponto: "."
var hex = 0xFF; // Números em Hexdecimal 255
var binario = 10; // Números Binários 10
//console.log("-".repeat(rep));
console.log("N\u00FAmero inteiro: ".concat(inteiro)); // Concatenar texto com uma variávvel, com uso da cráse e ${}.
console.log("N\u00FAmero decimal: ".concat(decimal));
console.log("N\u00FAmero hexadecimal: ".concat(hex));
console.log("N\u00FAmero bin\u00E1rio: ".concat(binario));
// ----------------Boolean
var ativo = true;
var desativado = false;
// ----------------End Code
// console.log();
// console.log("-".repeat(rep));
// console.log("-".repeat(str), " Finish ", "-".repeat(str));
// console.log("-".repeat(rep));
