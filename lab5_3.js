// Асинхронные операции с промисами
function squareValue(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(x ** 2), Math.random() * 500);
    });
}

function doubleValue(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(2 * x), Math.random() * 500);
    });
}

function constantNegativeTwo() {
    return new Promise(resolve => {
        setTimeout(() => resolve(-2), Math.random() * 500);
    });
}

function halveValue(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(x / 2), Math.random() * 500);
    });
}

function addFive(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(x + 5), Math.random() * 500);
    });
}

function negateValue(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(-x), Math.random() * 500);
    });
}

// Основная функция вычисления с промисами
async function computeCompositeFunction(inputValue, operations) {
    let accumulatedResult = 0;
    
    for (let i = 0; i < operations.length; i++) {
        const operation = operations[i];
        const operationResult = await operation(inputValue);
        accumulatedResult += operationResult;
        console.log(`Операция ${i + 1} вернула ${operationResult}, текущая сумма: ${accumulatedResult}`);
    }
    
    return accumulatedResult;
}

// Примеры использования с async/await
async function runExamples() {
    try {
        // a. 2 операции (square + double)
        console.log('a. 2 операции (square + double), x = 3');
        const resultA = await computeCompositeFunction(3, [squareValue, doubleValue]);
        console.log(`Итоговый результат: ${resultA}\n`);

        // b. 4 операции (square + double + const(-2) + halve)
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('b. 4 операции (square + double + const(-2) + halve), x = 4');
        const resultB = await computeCompositeFunction(4, [
            squareValue, 
            doubleValue, 
            constantNegativeTwo, 
            halveValue
        ]);
        console.log(`Итоговый результат: ${resultB}\n`);

        // c. 6 операций (все доступные)
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('c. 6 операций (все доступные), x = 5');
        const resultC = await computeCompositeFunction(5, [
            squareValue, 
            doubleValue, 
            constantNegativeTwo, 
            halveValue, 
            addFive, 
            negateValue
        ]);
        console.log(`Итоговый результат: ${resultC}`);
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}

runExamples();