// Material apoio proj Dantas: https://github.com/franciscodnn/pweb1-2025-2/blob/main/classes/5_classes/README.md

// Exemplo básico de uma classe
class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar(): string {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`; //--Para injetar um atributo de uma Class "${this.atributo}"
  }
}

const pessoa = new Pessoa("Maria", 25);

const lin: number = 20;

console.log("-".repeat(lin), "Modelo Class Básica");
console.log(pessoa.nome); //-----------Resultado esperado: Maria
console.log(pessoa); //----------------Resultado esperado: "nome: Maria, idade: 25"
console.log(pessoa.apresentar()); //---Resultado esperado: "Olá meu nome é Maria e tenho 25 anos."
console.log(pessoa.nome="Renato"); //--Resultado esperado: Renato
//console.log(apresentar()); //--------Resultado esperado: Erro, porque está privatico a Classe
console.log();

// Exemplo de uma classe com propriesdas "readonly" e campo sem inicializar
class Produto {
  nome: string = "Produto sem nome"; //--Campo com valor inicial
  
  readonly codigo: string; //------------Campo readonly, valor não pode ser alterado, recebe apenas 1 única vez
  
  preco: number; //----------------------Campo sem inicializador
  
  constructor(codigo: string, preco: number) {
    this.codigo = codigo;
    this.preco = preco;
  }
}

const produto = new Produto("P001", 29.99);

console.log("-".repeat(lin), "Modelo Class com propriedades Readonly e sem inicialização");
console.log(produto.nome); //-----------------Resultado esperado: "Produto sem nome"
console.log(produto.preco); //----------------Resultado esperado: "29,99"
console.log(produto.codigo); //---------------Resultado esperado: "P001"
console.log(produto); //----------------------Resultado esperado: Objeto
console.log(produto.nome='Caixa de Son'); //--Resultado esperado: "Caixa de Son"
console.log(produto); //----------------------Resultado esperado: Objeto com nome atualizado
//console.log(produto.codigo=P0002); //-------Erro, porque "readonly" não pode ser atualizado
console.log();

// Classe com Construtor com propriedades com várias visibilidade
class Usuario {
  constructor(
    public username: string, //-----Pode ser acessado de qualquer lugar do código
    private password: string, //----Pode ser acessado apenas dentro da classe, herdeiros não tem acesso
    protected usertype: string, //--Pode ser acessado apenas dentro da classe e dos herdeiros
    readonly id: number //----------So inicaliza uma única vez, e não pode ser alterado no
  ) {
    // O código acima automaticamente cria e inicializa as propriedades
    // necessário estas "{}" vazias para isso
  }
  
  verificarSenha(senha: string): boolean {
    return this.password === senha;
  }
  
}

const usuario = new Usuario("joao123", "senha123", 'admin', 1);

console.log("-".repeat(lin), "Modelo Class com Construtor e propriedades com visibilidade");
console.log(usuario); //--------------Resultado esperado: Objeto com todas as propriedades
console.log(usuario.username); //-----Resultado esperado: "Joao123"
//console.log(usuario.password); //---Resultado esperado: Erro, só pode ser acessado dentro da Classe
//console.log(usuario.protected); //--Resultado esperado: Erro, só pode ser acessado dentro da Classe ou Herdeiros
console.log(usuario.id); //-----------Resultado esperado: "1"

// Funções definidas dentro da Classe
class Calculadora {
  private resultado: number = 0;
  
  somar(valor: number): void { //--O "void" não retorna nada, apenas faz ou sofre uma ação
    this.resultado += valor;
  }
  
  subtrair(valor: number): void {
    this.resultado -= valor;
  }
  
  obterResultado(): number {
    return this.resultado;
  }
  
  // Método com parâmetros opcionais
  multiplicarOuDividir(valor: number, multiplicar: boolean = true): void {
    if (multiplicar) {
      console.log("Multiplicação de valor");
      this.resultado *= valor;
    } else {
      console.log("MDivisão de valor");
      this.resultado /= valor;
    }
  }
}

const calc = new Calculadora();
calc.somar(10);
calc.subtrair(2);

console.log("-".repeat(lin), "Função dentro de uma Classe");
calc.multiplicarOuDividir(2); //--------Multiplica por 2
//console.log(calc.subtrair()); //------Resultado esperrado: Erro porque não tem Get configurado para acessar fora da classe

console.log(calc.obterResultado()); //--Saída: 16
console.log();

// Classe com GET e SET
class Conta {
  private _saldo: number = 0; //--O uso do "_" antesda propriedade é para indicar que é privada
  
  get saldo(): number { //--Getter permite acessar fora da Classe
    console.log("Saldo consultado");
    return this._saldo;
  }
  
  set saldo(valor: number) {  //--Setter permite atualizar fora da Classe 
    if (valor < 0) {
      console.error("Não é possível definir um saldo negativo");
      return;
    }
    console.log(`Saldo alterado de ${this._saldo} para ${valor}`);
    this._saldo = valor;
  }
  
  get saldoEmDolar(): number { //--Propriedade somente leitura (apenas getter não tem o setter para ele
    console.log("Salto convertido em Dolar");
    return this._saldo / 5; //-----Taxa de câmbio fictícia dolar
  }
}

const minhaConta = new Conta();

console.log("-".repeat(lin), "Classe com GETs e SETs");
console.log(minhaConta); //---------------Resultado esperado: _saldo: 0
console.log(minhaConta.saldo); //---------Resultado esperado: Acesso do saldo pelo Get, "Salto consultado" + valor do saldo = 0
minhaConta.saldo = 1000 //----------------Acessar saldo pelo Set para atualizar o valor na conta, "Saldo alterado de xx para xxx" + valor do saldo
console.log(minhaConta.saldo); //---------Resultado esperado: Acesso do saldo pelo Get, "Salto consultado" + valor do saldo = 1000
console.log(minhaConta.saldoEmDolar); //--Resultado esperado: Acesso do saldo em dolar pelo Get, valor do saldo = 200
console.log();


// $ npx tsc -----------------------------------------[converte os "arquivos.ts" para "arquivos.js", para poder rodar no ".html"]
// $ npm install --sace-dev @types/node ts-node tsx --[permite executar o TypeScript direto no Node.js, executar na pasta do projeto]
// $ npx tsx arquivo.ts ------------------------------[para executar "arquivo.ts", sem transformar o "arquivo.ts" em "arquico.js"]
// $ npx tsx ./pasta/arquivo.ts ----------------------[para executar "arquivo.ts", sem está  dentro pasta]