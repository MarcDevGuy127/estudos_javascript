/*
Grupo 2 - Controle de Fluxo
    5. Escrever um programa em JS que solicita as notas das duas provas
    feitas por cada um dos alunos de uma turma (as notas têm de estar no
    intervalo [0, 10]) e imprime para cada um a média das notas. O programa
    deve parar imediatamente após ter sido digitado o valor 50 para a nota
    da primeira prova.
*/

function executarGrupo2Exercicio5() { //funcao para botao

    const totalAlunos = parseInt(prompt("Informe a quantidade de alunos na turma:"));

    for (let i = 0; i < totalAlunos; i++) {
        let nomeAluno = prompt("Informe o nome do estudante:");
        let primeiraNota = parseFloat(prompt("Informe a primeira nota:"));
        let segundaNota = parseFloat(prompt("Informe a segunda nota:"));

        if (primeiraNota === 50) break;

        if (primeiraNota > 10 || segundaNota > 10) {
            alert("Nota inválida! Insira um valor entre 0 e 10.");
            i--; // volta/retrocede um passo no loop para corrigir/repreencher.
            continue; // continue: pula a execução do código restante na iteração atual e avançar para a próxima iteração.
        }

        let media = (primeiraNota + segundaNota) / 2;

        alert(`Estudante: ${nomeAluno} \n 1° Prova: ${primeiraNota} \n 2° Prova: ${segundaNota} \n Média: ${media}`);
    }
}