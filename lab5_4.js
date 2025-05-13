// Асинхронные математические операции
function calculateSquare(number) {
    return new Promise(resolve => {
        setTimeout(() => {
            const squaredValue = number ** 2;
            resolve(squaredValue);
        }, Math.random() * 500);
    });
}

function calculateDouble(number) {
    return new Promise(resolve => {
        setTimeout(() => {
            const doubledValue = 2 * number;
            resolve(doubledValue);
        }, Math.random() * 500);
    });
}

function getNegativeTwo() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(-2);
        }, Math.random() * 500);
    });
}

function calculateHalf(number) {
    return new Promise(resolve => {
        setTimeout(() => {
            const halfValue = number / 2;
            resolve(halfValue);
        }, Math.random() * 500);
    });
}

function addFive(number) {
    return new Promise(resolve => {
        setTimeout(() => {
            const incrementedValue = number + 5;
            resolve(incrementedValue);
        }, Math.random() * 500);
    });
}

function negateNumber(number) {
    return new Promise(resolve => {
        setTimeout(() => {
            const negatedValue = -number;
            resolve(negatedValue);
        }, Math.random() * 500);
    });
}

// Основная функция вычисления
async function computeCompositeFunction(inputValue, operationFunctions) {
    let accumulatedResult = 0;

    for (let operationIndex = 0; operationIndex < operationFunctions.length; operationIndex++) {
        const currentOperation = operationFunctions[operationIndex];
        const operationResult = await currentOperation(inputValue);
        accumulatedResult += operationResult;
        console.log(`Операция ${operationIndex+1} возвращает ${operationResult}, текущая сумма: ${accumulatedResult}`);
    }

    return accumulatedResult;
}

// Примеры использования
async function runFirstExample() {
    console.log('Пример 1: 2 операции (возведение в квадрат + удвоение), x = 3');
    const finalResult = await computeCompositeFunction(3, [calculateSquare, calculateDouble]);
    console.log(`Итоговый результат: ${finalResult}\n`);
}

async function runSecondExample() {
    console.log('Пример 2: 4 операции (квадрат + удвоение + константа -2 + деление пополам), x = 4');
    const finalResult = await computeCompositeFunction(4, [calculateSquare, calculateDouble, getNegativeTwo, calculateHalf]);
    console.log(`Итоговый результат: ${finalResult}\n`);
}

async function runThirdExample() {
    console.log('Пример 3: 6 операций (все доступные), x = 5');
    const finalResult = await computeCompositeFunction(5, [calculateSquare, calculateDouble, getNegativeTwo, calculateHalf, addFive, negateNumber]);
    console.log(`Итоговый результат: ${finalResult}\n`);
}

// Запуск примеров последовательно
runFirstExample()
    .then(() => runSecondExample())
    .then(() => runThirdExample());