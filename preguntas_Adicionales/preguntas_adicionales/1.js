const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const palabra1 = ['a', 'b', 'e', 'j', 'a'];
const num1 = [15, 17, 0, 0, 0];
let resultado = [];
let palabraRes = [];

const palabra2 = ['s', 'a', 'n', 'd', 'i', 'a','s'];
const num2 = [20, 0, 0, 23, 19, 13, 8]


for (let i = 0; i < palabra2.length; i++) {
    let index = alfabeto.findIndex(elemento => elemento === palabra1[i]);
    resultado[i] = index + num1[i];
    palabraRes[i] = alfabeto[resultado[i]];
}

console.log(palabraRes);