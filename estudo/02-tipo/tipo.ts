// ---------Tipor primitivos
// ----------------String
const lin: number = 60;
const linf: number = 25;

console.log("-".repeat(lin));
console.log("-".repeat(linf), " Start ", "-".repeat(linf));
console.log("-".repeat(lin));
console.log();

let nome: string = 'João';                       // Pode ser usado entre plica: '...'
let frase: string = "TypeScript é incrível";     // Pode ser usado com aspas: "..."
let msg: string = `Olá ${nome}, ${frase}!`;      // Para concatenar texto + variável com uso da cráse: `...+...`

console.log(msg);

// ----------------Number
let inteiro: number = 42;     // Números Inteiros
let decimal: number = 3.14;   // Números Fracionados, ou Flutuantes com separador por ponto: "."
let hex: number = 0xFF;       // Números em Hexdecimal 255
let binario: number = 0b1010; // Números Binários 10

//console.log("-".repeat(lin));
console.log(`Número inteiro: ${inteiro}`); // Concatenar texto com uma variávvel, com uso da cráse e ${}.
console.log(`Número decimal: ${decimal}`);
console.log(`Número hexadecimal: ${hex}`);
console.log(`Número binário: ${binario}`);

// ----------------Boolean
let ativo: boolean = true;
let desativado: boolean = false;


// ----------------End Code
console.log();
console.log("-".repeat(lin));
console.log("-".repeat(linf), " Finish ", "-".repeat(linf));
console.log("-".repeat(lin));

// Link pesquisa TypeScript: https://gemini.google.com/app/b41e75faecb0abec
// Para subsstituir todos os termos de um código ao mesmo tempo basta selecionar "Crtl + H" e escrever na caixa 1 o termo antigo e na caixa 2 o noto termo depois selecionar sunstituit tudo.
// $ npx tsc -----------------------------------------[converte os "arquivos.ts" para "arquivos.js", para poder rodar no ".html"]
// $ npm install --sace-dev @types/node ts-node tsx --[permite executar o TypeScript direto no Node.js, executar na pasta do projeto]
// $ npx tsx arquivo.ts ------------------------------[para executyar "arquivo.ts", sem transformar o "arquivo.ts" em "arquico.js"]
// $ npx tsx ./pasta/arquivo.ts ----------------------[para executyar "arquivo.ts", sem está  dentro pasta]