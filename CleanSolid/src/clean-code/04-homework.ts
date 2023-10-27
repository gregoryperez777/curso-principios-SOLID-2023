(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit( fruit: string ): boolean {

        // BEFORE
        // if ( fruit === 'manzana' || fruit === 'cereza' || fruit === 'ciruela' ) {
        //     return true;
        // } else {
        //     return false;
        // }

        // NOW        
        const redFruits: string[] = ['manzana', 'cereza', 'ciruela'];

        return redFruits.includes(fruit);

       
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    type FruitColor = 'red'|'yellow'|'purple';
    function getFruitsByColor( color: FruitColor ): string[] {

        // BEFORE
        // if ( color === 'red' ) {
        //     return ['manzana','fresa'];
        // } else if ( color === 'yellow') {
        //     return ['piña','banana'];
        // } else if ( color === 'purple') {
        //     return ['moras','uvas']
        // } else {
        //     throw Error('the color must be: red, yellow, purple');
        // }

        // NOW
        const fruitsByColor: { [index: string]: string[], red: string[], yellow: string[], purple: string[] } = {
            red: ['manzana','fresa'],
            yellow: ['manzana','fresa'],
            purple: ['moras','uvas']
        };


        // Aqui se coloca en la linea siguiente porque 
        // tambien existen reglas para no rebasar cierta 
        // cantidad de caracteres por Linea

        // tambien en este caso para que quede claro 
        // que el throw pertence al condicional 
        // se usan las llaves
        if (!Object.keys(fruitsByColor).includes(color)) {
            throw Error('the color must be: red, yellow, purple');
        } 

        return fruitsByColor[color];       
       
    }

    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {

        // BEFORE
        // if( isFirstStepWorking === true ) {
        //     if( isSecondStepWorking === true ) {
        //         if( isThirdStepWorking === true ) {
        //             if( isFourthStepWorking === true ) {
        //                 return 'Working properly!';
        //             }
        //             else {
        //                 return 'Fourth step broken.';
        //             }
        //         }
        //         else {
        //             return 'Third step broken.';
        //         }
        //     }
        //     else {
        //         return 'Second step broken.';
        //     }
        // }
        // else {
        //     return 'First step broken.';
        // }

        // NOW for me
        // const steps: Boolean[] = [isFirstStepWorking, isSecondStepWorking, isThirdStepWorking, isFourthStepWorking];
        // const errorSteps: String[] = ['First step broken.', 'Second step broken.', 'Third step broken.', 'Fourth step broken.'];

        // const lengthSteps = steps.length;
        
        // let index = 0;

        // while (index < lengthSteps && steps[index]) {
        //     index += 1;
        // }

        // if (index === lengthSteps) return 'Working properly!';

        // return errorSteps[index];

        // For the teacher

        if (!isFirstStepWorking) return 'First step broken.';

        if (!isSecondStepWorking) return 'Second step broken.';

        if (!isThirdStepWorking) return 'Third step broken.';

        if (!isFourthStepWorking) return 'Fourth step broken.';

        return 'Working properly'
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();




