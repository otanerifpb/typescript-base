function calculadora(op1, op2, oper) {
    var resultado = '';
    switch (oper) {
        case '+': return String(op1 + op2);
        case '-': return String(op1 - op2);
        case '*': return String(op1 * op2);
        case '/': return String(op1 / op2);
        default: resultado = 'Operação não suportada'; //Resukltado para operadores que não está na lista
    }
    return resultado;
}
var str = 20;
// const separatorLine: string = "-".repeat();
console.log("-".repeat(str), " Resultado Adição ", "-".repeat(str)); //--[para concatenar, basta usar ',']
console.log(calculadora(3, 4, '+')); //Resultado = 7
// console.log("-".repeat(str), " Resultado Subtração ", "-".repeat(str)); 
console.log(calculadora(4, 3, '-')); //Resultado = 1
// console.log("-".repeat(str), " Resultado Multiplicação ", "-".repeat(str)); 
console.log(calculadora(3, 4, '*')); //Resultado = 12
// console.log("-".repeat(str), " Resultado Divisão ", "-".repeat(str)); 
console.log(calculadora(9, 3, '/')); //Resultado = 3
// Para executar a aplicação é preciso transformar o calculadora.ts para calculadora.js, necessário está dentro da pasta dp projeto
// $ npx tsc -----------------------------------------[converte os "arquivos.ts" para "arquivos.js", cria os arquivos necessários para compilar o código]
// $ npm install --sace-dev @types/node ts-node tsx --[permite executar o TypeScript direto no Node.js]
// $ npx tsx calculadora.ts --------------------------[para ver o resultado do código no arquivo "calculadora.ts", rodar/executar o código dentro da pasta]
// $ npx tsx nomePasta\nome_arquivo.ts ---------------[para rodar o código sem está dentro da pasta]
