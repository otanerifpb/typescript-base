"use strict";
// -----------------Descrição
// Considere que um professor está construindo um sistema de avaliações no qual as questões possuem peso, 
// então dado que foi criado uma avaliação com estas questões: onde Q = Questão; P = Peso; R = Resposta e A = Aluno.
// Q 1: P = 2 e R = a; Q 2: P = 2 e R = b; Q 3: P = 2 e R = a; Q 4: P = 2 e R = c; Q 5: P = 2 e R = d
Object.defineProperty(exports, "__esModule", { value: true });
class Exams {
    questao = [];
    prova = [];
    nota = [];
    constructor(questao, prova, nota) {
        this.nota = nota;
        this.prova = prova;
        this.questao = questao;
    }
    add() {
    }
    avg() {
    }
    min() {
    }
    max() {
    }
    lt() {
    }
    gt() {
    }
}
//# sourceMappingURL=objetoExames.js.map