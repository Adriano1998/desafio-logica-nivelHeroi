let nomeHeroi = "Rambo";
let quantidadeExperiencia = 4234;
let classificacao = "";

if (quantidadeExperiencia < 1000) {
    classificacao = "Ferro";
} else if (quantidadeExperiencia >= 1001 && quantidadeExperiencia <= 2000) {
    classificacao = "Bronze";
} else if (quantidadeExperiencia >= 2001 && quantidadeExperiencia <= 5000) {
    classificacao = "Prata";
} else if (quantidadeExperiencia >= 5001 && quantidadeExperiencia <= 7000) {
    classificacao = "Ouro";
} else if (quantidadeExperiencia >= 7001 && quantidadeExperiencia <= 8000) {
    classificacao = "Platina";
} else if (quantidadeExperiencia >= 8001 && quantidadeExperiencia <= 9000) {
    classificacao = "Ascendente";
} else if (quantidadeExperiencia >= 9001 && quantidadeExperiencia <= 10000) {
    classificacao = "Imortal";
} else if (quantidadeExperiencia >= 10001) {
    classificacao = "Radiante";
} else {
    console.log("Não foi encontrada uma classificação para o heroi");
}

console.log("O heroi de nome " + nomeHeroi + " está no nível de: " + classificacao);