// Асинхронные операции с промисами

// Функция, которая возвращает промис, резолвящийся с квадратом числа x после случайной задержки
function squareValue(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(x ** 2), Math.random() * 500);
    });
}

// Функция, которая возвращает промис, резолвящийся с удвоенным значением x после случайной задержки
function doubleValue(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(2 * x), Math.random() * 500);
    });
}

// Функция, которая возвращает промис, резолвящийся с константой -2 после случайной задержки
function constantNegativeTwo() {
    return new Promise(resolve => {
        setTimeout(() => resolve(-2), Math.random() * 500);
    });
}

// Функция, которая возвращает промис, резолвящийся с половиной значения x после случайной задержки
function halveValue(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(x / 2), Math.random() * 500);
    });
}

// Функция, которая возвращает промис, резолвящийся с x+5 после случайной задержки
function addFive(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(x + 5), Math.random() * 500);
    });
}

// Функция, которая возвращает промис, резолвящийся с отрицанием x после случайной задержки
function negateValue(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(-x), Math.random() * 500);
    });
}

// Основная функция вычисления с промисами
async function computeCompositeFunction(inputValue, operations) {
    let accumulatedResult = 0; // Инициализация накопленного результата
    
    // Итерация по всем операциям в массиве operations
    for (let i = 0; i < operations.length; i++) {
        const operation = operations[i]; // Получаем текущую операцию
        const operationResult = await operation(inputValue); // Ждем результат операции
        accumulatedResult += operationResult; // Добавляем результат к накопленной сумме
        console.log(`Операция ${i + 1} вернула ${operationResult}, текущая сумма: ${accumulatedResult}`);
    }
    
    return accumulatedResult; // Возвращаем итоговую сумму
}

// Примеры использования с async/await
async function runExamples() {
    try {
        // a. 2 операции (square + double)
        console.log('a. 2 операции (square + double), x = 3');
        const resultA = await computeCompositeFunction(3, [squareValue, doubleValue]);
        console.log(`Итоговый результат: ${resultA}\n`);

        // Пауза 2 секунды перед следующим примером
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // b. 4 операции (square + double + const(-2) + halve)
        console.log('b. 4 операции (square + double + const(-2) + halve), x = 4');
        const resultB = await computeCompositeFunction(4, [
            squareValue, 
            doubleValue, 
            constantNegativeTwo, 
            halveValue
        ]);
        console.log(`Итоговый результат: ${resultB}\n`);

        // Еще пауза 2 секунды перед последним примером
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // c. 6 операций (все доступные)
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
        console.error('Произошла ошибка:', error); // Обработка возможных ошибок
    }
}

// Запуск примеров
runExamples();
