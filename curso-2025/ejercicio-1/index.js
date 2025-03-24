
/*
recibe un string y devuelve la cantidad de veces
que aparece la letra A, en mayuscula o minúscula.
*/
const countA = (str) => {
    let count = 0;
    for(const char of str){
        if (char === 'a'){
            count++;
        }
    }
    return count;
};

/*
recibe un string y un caracter
devuelve la cantidad de veces que se repite el caracter
no discrimina entre mayuscula y minúscula
*/
const countLetter = (str, letter)=>{
    // escriba aquí su código
};

/*
recibe una lista de numeros
devuelve el mayor numero par
*/
const greaterEvenNumber = (list) => {
    // escriba aquí su código
}

module.exports = {countA, countLetter, greaterEvenNumber};