// Material apoio proj Dantas: https://github.com/franciscodnn/pweb1-2025-2/blob/main/classes/4_objects_ts/README.md

// Função tipo Anônimo: cria e retorna o objedo inline
function saudar(pessoa: { nome: string; idade: number }) {
  return `Olá ${pessoa.nome}, você tem ${pessoa.idade} anos!`;
}

const lin: number = 20;

console.log("-".repeat(lin), "Função anônima");
console.log(saudar({nome:'Fernando', idade: 13})); // Resultado esperado "Olá Fernando, você tem 13 anos!"
console.log();

// Propriedade opcional para um objeto adicionar "?"
interface Pessoa {
  nome: string;       // Propriedade obrigatória
  idade: number;
  endereco?: string;  // Propriedade opcional
}

const cli01: Pessoa = {
    nome: 'Renato',
    idade: 37
}

const cli02: Pessoa = {
    nome: 'Marcos',
    idade: 27,
    endereco: 'Rua das Flores, 123'
}

console.log("-".repeat(lin), "Propriedade Opcional de um Obhjeto");
console.log(cli01.nome); // Resultado esperado "Renato"
console.log(cli01); // Resultado esperado "nome: Renato, idade: 37"
console.log();
console.log(cli02.nome); // Resultado esperado "Renato"
console.log(cli02); // Resultado esperado "nome: Marcos, idade: 37, endereco: Rua das Flores, 123"
console.log();

// Definição do Contrato com a estrutura base de um objeto
interface Usuario {
    id: number;
    nome: string;
    email: string;
    ativo: boolean //"boolean" retorna o valor primitivo "true ou false", Boolean retorna um objeto, precisamos ter cuidado pois o resultado pode ser inesperado.
}

const usuario: Usuario = {
    id: 1,
    nome: "Juninho",
    email: "juninho@teste.com",
    ativo: true
}

console.log("-".repeat(lin), "Objeto com contrato de estrutura base");
console.log(usuario.nome); // Resultado esperado "Juninho"
console.log(usuario); // Resultado esperado "ide: 1, nome: Juninho, amail: juninho@teste.com, ativo: true"
console.log();

// Herança, filho herda propriedades do Pai
interface Animal {  // Interface Pai
  nome: string;
}

interface Cachorro extends Animal { // Interface filha herda propriedade "nome" do Pai
  raca: string;
  latir(): void;
}


const cao: Cachorro = {
    nome: "Toto",
    raca: "Poodo",
    latir() {
        return 'Au, au';
    },
}

console.log("-".repeat(lin), "Herança");
console.log(cao.latir());
console.log(`Nome: ${cao.nome}, Raça: ${cao.raca}, Son: ${cao.latir()}`);
console.log(`Nome: ${cao.nome}, \nRaça: ${cao.raca}, \nSon: ${cao.latir()}`); //"\n" deixa cada propriedade em um linha.
console.log();

// Combinação mútiplo tipos
type Humano = { nome: string; idade: number };
type Empregado = { empresa: string; cargo: string };

type Funcionario = Humano & Empregado;

const funcionario: Funcionario = {
  nome: "João",
  idade: 30,
  empresa: "TechCorp",
  cargo: "Desenvolvedor"
};

console.log("-".repeat(lin), "Combinação Mútiplo Tipos");
console.log(funcionario);
console.log();

// $ npx tsc -----------------------------------------[converte os "arquivos.ts" para "arquivos.js", para poder rodar no ".html"]
// $ npm install --sace-dev @types/node ts-node tsx --[permite executar o TypeScript direto no Node.js, executar na pasta do projeto]
// $ npx tsx arquivo.ts ------------------------------[para executyar "arquivo.ts", sem transformar o "arquivo.ts" em "arquico.js"]
// $ npx tsx ./pasta/arquivo.ts ----------------------[para executyar "arquivo.ts", sem está  dentro pasta]