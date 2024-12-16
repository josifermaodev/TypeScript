let numerosOrdenados: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
let numerosRepetidos: Array<number> = [1, 2, 3, 1, 4, 5, 6, 2, 7, 8, 9, 3, 4, 10, 7];
 
let numerosDesordenados: Array<number> = [6, 7, 8, 1, 4, 5, 9, 10, 2, 3];
 
let estados: Array<string> = [
    "São Paulo",
    "Rio de Janeiro",
    "Minas Gerais",
    "Espirito Santo",
    "Rio Grande do Sul",
    "Santa Catarina",
    "Paraná"
];
 
let estadosRepetidos: Array<string> = [
    'São Paulo',
    'Rio de Janeiro',
    'Minas Gerais',
    'Espirito Santo',
    'São Paulo',
    'Rio de Janeiro',
    'São Paulo',
    'Rio de Janeiro',
];
 
let estadosCentroOeste: Array<string> = [
    'Goiás',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Brasília'
];

console.log("Listar estados que começam com a palavra Rio (filter())")

let estadosContemRio = estados.filter(e => e.includes("Rio"));

console.dir(estadosContemRio)

console.log("\nListar todos os numeros multiplicados por 3 (map())")

let numerosMultiplicadosPorTres = numerosOrdenados.map(n => n * 3);

console.dir(numerosMultiplicadosPorTres)

console.log("\nListar todos os sem repeticoes")

let estadosSemRepeticao = estadosRepetidos.reduce((acumulador: string[], estado) => {
    if (acumulador.indexOf(estado) === -1) {
        acumulador.push(estado);
    }
    return acumulador;
}, []);

console.dir(estadosSemRepeticao)

console.log("Combinacao de Arrays")

const arrayCombinado: number[] = [...numerosOrdenados, ...numerosDesordenados]; 

