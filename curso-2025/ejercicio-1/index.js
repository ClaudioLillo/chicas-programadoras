
/*
recibe un string y devuelve la cantidad de veces
que aparece la letra A, en mayúscula o minúscula.
*/
const countLetterA = (str) => {
    let count = 0;
    for(const char of str){
        if (char === 'a'){
            count++;
        }
    }
    return count;
};

/**
 * Compara una letra con el un numero en string
 */
function isANumberNotPretty(char) {
	if (
		char === '0' ||
		char === '1' ||
		char === '2' ||
		char === '3' ||
		char === '4' ||
		char === '5' ||
		char === '6' ||
		char === '7' ||
		char === '8' ||
		char === '9'
	) {
		return true
	}
	return false
}

function isANumber(char) {
	return Number.isInteger(char);
}

/**
 * Recibe un string y cuenta los números que son menores a 5
 */
function countNumbers(str) {
	let count = 0;
	for (const char of str) {
		const isNumber = isANumberNotPretty(char);
		if(isNumber && Number(char) < 5) {
			count++
		}
	}
	return count;
}


/*
* Ejercicios
*/


/*
recibe un string y un carácter
devuelve la cantidad de veces que se repite el carácter
no discrimina entre mayúscula y minúscula
*/
function countLetter(str, letter) {
    // escriba aquí su código
};

/*
recibe un string y un carácter
devuelve la cantidad de veces que se repite el carácter
si isCaseSensitive es = false
*/
function countLetterWithOption(str, letter, isCaseSensitive = false) {
    // escriba aquí su código
};

/*
recibe una lista de números
devuelve el mayor numero par
*/
function greaterEvenNumber(list) {
    // escriba aquí su código
}

/**
 * Esta función recibe un listado de números.
 * Retorna true si están TODOS en orden ascendente
 */
function isIncreasing(list) {
	// escriba aquí su código
}


/**
 * Esta function recibe un listado de números.
 * Retorna true si están TODOS en orden ascendente o descendentes
 */
function isInOrder(list) {
	// escriba aquí su código
}

export {
	countLetter,
	countLetterA,
	countLetterWithOption,
	countNumbers,
	greaterEvenNumber,
	isIncreasing,
	isInOrder
}