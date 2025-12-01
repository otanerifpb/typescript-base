// link material apoio Prf. Dantas: https://github.com/franciscodnn/pweb1-2025-2/blob/main/classes/3_functions/README.md

// ----------------Usar Interface
interface Usuario {
  nome: string;
  saudar(this: Usuario): string;
}

const usuario: Usuario = {
  nome: "Renato",
  saudar() {
    return `Olá, meu nome é ${this.nome}`;
  }
};

const lin: number = 20;

console.log("-".repeat(lin), " Uso de Interface"); 
console.log(usuario.nome);     // Resultado esperado "Renato"
console.log(usuario.saudar()); // Resultado esperado "Olá meu nome é Renato"
console.log();

// ----------------Usar mais de uma ação para a mesma Função
function converter(valor: string): number;
function converter(valor: number): string;
function converter(valor: string | number): number | string { // o "|" é usado para a lpogica dou "ou"
  if (typeof valor === "string") {                            // para confirmar se um valor é igual ao outro
    return parseFloat(valor);                                 // Resultado esperado para o restorno = número
  } else {
    return String(valor);                                     // Resultado esperado para o restorno = string
  }
}

console.log("-".repeat(lin), " Uso de mais de uma ação para a mesma Função"); 
console.log( converter('123'),'é tipo de saída:', typeof converter('123'));
console.log( converter(123),'é tipo de saída:', typeof converter(123));
console.log();

// ----------------Usar Contar quantidade de letras ou elementos de um Array
interface ComTamanho {
  length: number;
}

function tamanho<T extends ComTamanho>(item: T): number {
  return item.length;
}

console.log("-".repeat(lin), " Uso para contar letras ou quantidade de objetos em um Array"); 
console.log('quantidade de letras:', tamanho("teste"));    // Resultado esperado = 5
console.log('quantidade de objetos:', tamanho([1, 2, 3])); // Resultado esperado = 3
//console.log('quantidade de objetos:', tamanho(123));     // Resultado esperado = Erro: número não tem propriedade length
console.log();

// ----------------Usar uma Função com um COntrutor
interface TipoContrutor {
  new (nome: string): { nome: string };
}

function criarInstancia<T>(Construtor: new (nome: string) => T, nome: string): T {
  return new Construtor(nome);
}

// -----Exemplo de classe que bate com o TipoContrutor
class Pessoa {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  cumprimentar() {
    console.log(`Olá, meu nome é ${this.nome}`); // Resultado esperado: Olá, meu nome é Juninho
  }
}

// -----Criando uma instância da classe Pessoa com a função genérica
const pessoa = criarInstancia(Pessoa, "Juninho");


console.log(pessoa.nome);          // Resultado esperado: Juninho
(pessoa as Pessoa).cumprimentar(); // Resultado esperado: Olá, meu nome é Juninho
console.log();

// ----------------Usar Função para improimir cada elemento de um Array, onde o type esta implícito
const nomes = ["Alice", "Bob", "Charlie"];

// -----TypeScript infere que 'nome' é string
console.log("-".repeat(lin), " Uso uma Função que lista cada objeto de um array");
nomes.forEach(nome => {
    console.log(nome.toLowerCase());                                         // Resultado esperado: Imprimir 1 nome do array em cada linha tudo minusculo
    console.log(nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase()); // Resultado esperado: Imprimir 1 nome do array em cada linha tudo maiúsculo
    console.log(nome.toUpperCase());                                         // Resultado esperado: Imprimir 1 nome do array em cada linha tudo maiúsculo
});
console.log();

// Link pesquisa TypeScript: https://gemini.google.com/app/b41e75faecb0abec
// Para subsstituir todos os termos de um código ao mesmo tempo basta selecionar "Crtl + H" e escrever na caixa 1 o termo antigo e na caixa 2 o noto termo depois selecionar sunstituit tudo.
// $ npx tsc -----------------------------------------[converte os "arquivos.ts" para "arquivos.js", para poder rodar no ".html"]
// $ npm install --sace-dev @types/node ts-node tsx --[permite executar o TypeScript direto no Node.js, executar na pasta do projeto]
// $ npx tsx arquivo.ts ------------------------------[para executyar "arquivo.ts", sem transformar o "arquivo.ts" em "arquico.js"]
// $ npx tsx ./pasta/arquivo.ts ----------------------[para executyar "arquivo.ts", sem está  dentro pasta]