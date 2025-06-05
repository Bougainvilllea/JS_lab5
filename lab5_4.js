// Асинхронные математические операции

// Функция для вычисления квадрата числа с задержкой
function calculateSquare(number) {
    // Создаем и возвращаем новый Promise
    return new Promise(resolve => {
        // Устанавливаем таймер с случайной задержкой (до 500мс)
        setTimeout(() => {
            // Вычисляем квадрат числа
            const squaredValue = number ** 2;
            // Возвращаем результат через resolve
            resolve(squaredValue);
        }, Math.random() * 500); // Случайная задержка
    });
}

// Функция для удвоения числа с задержкой
function calculateDouble(number) {
    return new Promise(resolve => {
        setTimeout(() => {
            // Умножаем число на 2
            const doubledValue = 2 * number;
            resolve(doubledValue);
        }, Math.random() * 500);
    });
}

// Функция возвращает константу -2 с задержкой
function getNegativeTwo() {
    return new Promise(resolve => {
        setTimeout(() => {
            // Просто возвращаем -2
            resolve(-2);
        }, Math.random() * 500);
    });
}

// Функция для деления числа пополам с задержкой
function calculateHalf(number) {
    return new Promise(resolve => {
        setTimeout(() => {
            // Делим число на 2
            const halfValue = number / 2;
            resolve(halfValue);
        }, Math.random() * 500);
    });
}

// Функция для добавления 5 к числу с задержкой
function addFive(number) {
    return new Promise(resolve => {
        setTimeout(() => {
            // Прибавляем 5
            const incrementedValue = number + 5;
            resolve(incrementedValue);
        }, Math.random() * 500);
    });
}

// Функция для изменения знака числа с задержкой
function negateNumber(number) {
    return new Promise(resolve => {
        setTimeout(() => {
            // Меняем знак числа
            const negatedValue = -number;
            resolve(negatedValue);
        }, Math.random() * 500);
    });
}

// Основная функция вычисления композитной функции
async function computeCompositeFunction(inputValue, operationFunctions) {
    // Инициализируем аккумулирующий результат
    let accumulatedResult = 0;

    // Проходим по всем операциям в массиве
    for (let operationIndex = 0; operationIndex < operationFunctions.length; operationIndex++) {
        // Получаем текущую операцию
        const currentOperation = operationFunctions[operationIndex];
        // Ожидаем результат операции (await приостанавливает выполнение до получения результата)
        const operationResult = await currentOperation(inputValue);
        // Добавляем результат к общей сумме
        accumulatedResult += operationResult;
        // Выводим информацию о текущей операции
        console.log(`Операция ${operationIndex+1} возвращает ${operationResult}, текущая сумма: ${accumulatedResult}`);
    }

    // Возвращаем итоговый результат
    return accumulatedResult;
}

// Пример 1: 2 операции
async function runFirstExample() {
    console.log('Пример 1: 2 операции (возведение в квадрат + удвоение), x = 3');
    // Вызываем computeCompositeFunction с числом 3 и двумя операциями
    const finalResult = await computeCompositeFunction(3, [calculateSquare, calculateDouble]);
    console.log(`Итоговый результат: ${finalResult}\n`);
}

// Пример 2: 4 операции
async function runSecondExample() {
    console.log('Пример 2: 4 операции (квадрат + удвоение + константа -2 + деление пополам), x = 4');
    // Вызываем computeCompositeFunction с числом 4 и четырьмя операциями
    const finalResult = await computeCompositeFunction(4, [calculateSquare, calculateDouble, getNegativeTwo, calculateHalf]);
    console.log(`Итоговый результат: ${finalResult}\n`);
}

// Пример 3: все 6 операций
async function runThirdExample() {
    console.log('Пример 3: 6 операций (все доступные), x = 5');
    // Вызываем computeCompositeFunction с числом 5 и всеми операциями
    const finalResult = await computeCompositeFunction(5, [calculateSquare, calculateDouble, getNegativeTwo, calculateHalf, addFive, negateNumber]);
    console.log(`Итоговый результат: ${finalResult}\n`);
}

// Запуск примеров последовательно через цепочку промисов
runFirstExample()
    // После завершения первого примера запускаем второй
    .then(() => runSecondExample())
    // После завершения второго примера запускаем третий
    .then(() => runThirdExample());

// Запуск примеров последовательно
runFirstExample()
    .then(() => runSecondExample())
    .then(() => runThirdExample());
