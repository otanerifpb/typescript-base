function arquivo(
    num1: number,  
    num2: number, 
    oper: '+'|'-'|'*'|'/'): string  //Para dar opção de escolha usar "|"
    {

    let resultado = '';

    switch(oper){
        case '+' : return String(num1 + num2);
        case '-' : return String(num1 - num2);
        case '*' : return String(num1 * num2);
        case '/' : return String(num1 / num2);
        default: resultado = 'Operação não suportada'; //Resukltado para operadores que não está na lista
    }

    return resultado;
}

const lin: number = 20;
// const separatorLine: string = "-".repeat();

//console.log("-".repeat(lin), " Resultado Adição ", "-".repeat(lin)); 
//console.log(arquivo(3,4,'+'));
console.log("-".repeat(lin), " arquivo ", "-".repeat(lin));                   //[para concatenar, basta usar ','
console.log("-".repeat(lin), " Resultado Adição =", arquivo(3,4,'+'));        // Resultado = 7

console.log("-".repeat(lin), " Resultado Subtração =", arquivo(4,3,'-'));     // Resultado = 1

console.log("-".repeat(lin), " Resultado Multiplicação =", arquivo(3,4,'*')); // Resultado = 12

console.log("-".repeat(lin), " Resultado Divisão =", arquivo(9,3,'/'));       // Resultado = 3);
console.log(); 

// Link pesquisa: https://gemini.google.com/app/b41e75faecb0abec
// Para subsstituir todos os termos de um código ao mesmo tempo basta selecionar "Crtl + H" e escrever na "caixa 1" o termo antigo e na "caixa 2" o noto termo depois selecionar sunstituit tudo.
// $ npx tsc -----------------------------------------[converte os "arquivos.ts" para "arquivos.js", para poder rodar no ".html"]
// $ npm install --sace-dev @types/node ts-node tsx --[permite executar o TypeScript direto no Node.js, executar na pasta do projeto]
// $ npx tsx arquivo.ts ------------------------------[para ver o resultado do código no arquivo "arquivo.ts", rodar/executar o código dentro da pasta]
// $ tsc arquivo.ts ----------------------------------[para verificar se tem algum erro no código, mas não vai mostrar nada se estiver tudo OK]