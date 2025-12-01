// -----------------Descrição
// Considere que um professor está construindo um sistema de avaliações no qual as questões possuem peso, 
// então dado que foi criado uma avaliação com estas questões: onde Q = Questão; P = Peso; R = Resposta e A = Aluno.
// Q 1: P = 2 e R = a; Q 2: P = 2 e R = b; Q 3: P = 2 e R = a; Q 4: P = 2 e R = c; Q 5: P = 2 e R = d

// Então se um aluno respondeu a prova com as seguintes alternativas o resultado da nota será 4,0.
// Q 1: P = 2 e R = a e A = a; Q 2: P = 2 e R = b e A = b; Q 3: P = 2 e R = a e A = b; 
// Q 4: P = 2 e R = c e A = b; Q 5: P = 2 e R = d e A = b

// Para facilitar a criação deste sistema tente criar a classe Exams com esta estrutura:
// class Exams {-weigth: Weight; -answer: Answer; -exams: Array<Answer>}
// metodos {+construct(answer: Answer, weigth: Weight); +add(exam: Answer): void; +avg(): float; +min([count: float]): Array<float>;
//      +max([count: float]): Array<float>; +lt([limit: float]): Array<float>; +gt([limit: float]): Array<float>}

// Regras de como o Gabarito da Prova contém.
interface Gabarito {
    id: number;
    gabarito: string;
    weight: number;
}

// Regras de como as Prova do Aluno contém.
interface ProvaAluno {
    respostaId: number;
    answer: string;
}

// Regras de como as Notas da Prova do Aluno contém.
interface NotaAluno {
    alunoId: number;
    nota: string;
}

class Exams{
    private questao: Gabarito[] = [];
    private prova: ProvaAluno[] = [];
    private nota: NotaAluno[] = [];

    private constructor(questao: Gabarito[], prova: ProvaAluno[], nota: NotaAluno[]) {
        this.nota = nota;
        this.prova = prova;
        this.questao = questao;
    }

    private add() {

    }

    private avg() {

    }

    private min() {

    }

    private max() {

    }

    private lt() {

    }

    private gt() {
        
    }

}

// Link pesquisa: https://gemini.google.com/app/b41e75faecb0abec
// Para subsstituir todos os termos de um código ao mesmo tempo basta selecionar "Crtl + H" e escrever na "caixa 1" o termo antigo e na "caixa 2" o noto termo depois selecionar sunstituit tudo.
// $ npx tsc -----------------------------------------[converte os "arquivos.ts" para "arquivos.js", para poder rodar no ".html"]
// $ npm install --sace-dev @types/node ts-node tsx --[permite executar o TypeScript direto no Node.js, executar na pasta do projeto]
// $ npx tsx arquivo.ts ------------------------------[para ver o resultado do código no arquivo "arquivo.ts", rodar/executar o código dentro da pasta]
// $ tsc arquivo.ts ----------------------------------[para verificar se tem algum erro no código, mas não vai mostrar nada se estiver tudo OK]