// lab4_2
// Асинхронная функция для выполнения последовательных операций
async function performSequentialOperations() {
    try {
        // Выводим сообщение о начале операций
        console.log('Starting sequential operations...');
        
        // 1. Загружаем конфигурацию (ожидаем завершения)
        await loadConfig('myConfig');
        // 2. Выполняем SQL-запрос к базе данных
        await executeDatabaseQuery('SELECT * FROM cities');
        // 3. Загружаем веб-страницу
        await fetchWebPage('https://google.com');
        // 4. Читаем файл проекта
        await readProjectFile('README.md');
        
        // Логируем завершение операций
        logCompletion();
        // Сообщение о конце выполнения
        console.log('End of operations');
    } catch (error) {
        // Обрабатываем возможные ошибки
        console.error('Operation failed:', error);
    }
}

// lab4_3
// Асинхронные математические функции:

// Возведение в квадрат
async function squareValue(x) { return x * x; }

// Удвоение значения
async function doubleValue(x) { return x * 2; }

// Возврат константы -2
async function constantNegativeTwo() { return -2; }

// Деление пополам
async function halveValue(x) { return x / 2; }

// Добавление 5
async function addFive(x) { return x + 5; }

// Смена знака
async function negateValue(x) { return -x; }

// Основная функция вычислений
async function computeCompositeFunction(inputValue, operations) {
    // Инициализация накопления
    let accumulatedResult = 0;
    
    // Последовательное выполнение операций
    for (let i = 0; i < operations.length; i++) {
        // Получаем текущую операцию
        const operation = operations[i];
        // Ожидаем результат операции
        const operationResult = await operation(inputValue);
        // Добавляем результат к общей сумме
        accumulatedResult += operationResult;
        // Логируем промежуточный результат
        console.log(`Операция ${i + 1} вернула ${operationResult}, текущая сумма: ${accumulatedResult}`);
    }
    
    // Возвращаем итоговый результат
    return accumulatedResult;
}

// Функция с примерами использования
async function runExamples() {
    try {
        // Пример A: 2 операции
        console.log('a. 2 операции (square + double), x = 3');
        const resultA = await computeCompositeFunction(3, [squareValue, doubleValue]);
        console.log(`Итоговый результат: ${resultA}\n`);

        // Пауза 2 секунды перед следующим примером
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Пример B: 4 операции
        console.log('b. 4 операции (square + double + const(-2) + halve), x = 4');
        const resultB = await computeCompositeFunction(4, [
            squareValue, 
            doubleValue, 
            constantNegativeTwo, 
            halveValue
        ]);
        console.log(`Итоговый результат: ${resultB}\n`);

        // Еще пауза 2 секунды
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Пример C: все 6 операций
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
        // Обработка ошибок
        console.error('Произошла ошибка:', error);
    }
}

// lab4_4
// Альтернативная версия последовательных операций
async function performAlternativeSequence() {
    try {
        // Сообщение о начале
        console.log('start');
        
        // Последовательные операции:
        await readConfig('myConfig');
        await doQuery('select * from cities');
        await httpGet('http://google.com');
        await readFile('README.md');
        
        // Сообщения о завершении
        console.log('It is done!');
        console.log('end');
    } catch (error) {
        // Обработка ошибок
        console.error('Error:', error);
    }
}


// Самовызывающаяся асинхронная функция для запуска всех примеров
(async () => {
    // Запуск lab4_2
    console.log('Running lab4_2:');
    await performSequentialOperations();
    
    // Запуск lab4_3 с отступом
    console.log('\nRunning lab4_3:');
    await runExamples();
    
    // Запуск lab4_4 с отступом
    console.log('\nRunning lab4_4:');
    await performAlternativeSequence();
})();
