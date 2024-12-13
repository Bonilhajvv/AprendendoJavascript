console.log("trabalhando com condicionais");

const salvador = `Salvador`;
const saoPaulo = `Sao Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = true;

console.log('Destinos possíveis: ');
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1);
} else if (estaAcompanhada == true) {
    console.log("Menor de idade esta acompanhado por um responsavel, desta forma pode comprar");
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Comprador menor de idade");
}

console.log(listaDeDestinos);