
 // lab4_2 - Последовательное выполнение асинхронных операций
 // Реализация функций для имитации асинхронных операций с задержкой
 

// Асинхронная загрузка конфигурации
async function loadConfig(name) {
    // Имитация задержки операции (0-1000 мс)
    await new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
    // Вывод сообщения о завершении загрузки
    console.log('(1) config from', name, 'loaded');
}

// Асинхронное выполнение SQL-запроса
async function executeDatabaseQuery(query) {
    await new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
    console.log('(2) SQL query executed:', query);
}

// Асинхронная загрузка веб-страницы
async function fetchWebPage(url) {
    await new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
    console.log('(3) Page retrieved:', url);
}

// Асинхронное чтение файла проекта
async function readProjectFile(path) {
    await new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
    console.log('(4) Readme file from', path, 'loaded');
}

// Функция логирования завершения операций
function logCompletion() {
    console.log('It is done!');
}

 
// Основная функция последовательных операций
// Выполняет 4 асинхронные операции строго по порядку

async function performSequentialOperations() {
    try {
        console.log('Starting sequential operations...');
        
        // 1. Загрузка конфигурации (ожидает завершения)
        await loadConfig('myConfig');
        // 2. Выполнение SQL-запроса (начинается только после загрузки конфига)
        await executeDatabaseQuery('SELECT * FROM cities');
        // 3. Загрузка веб-страницы (после SQL-запроса)
        await fetchWebPage('https://google.com');
        // 4. Чтение файла проекта (после загрузки страницы)
        await readProjectFile('README.md');
        
        // Финализация
        logCompletion();
        console.log('End of operations');
    } catch (error) {
        // Обработка ошибок в любой из операций
        console.error('Operation failed:', error);
    }
}


// lab4_3 - Асинхронные математические операции
//  Набор простых математических функций, возвращающих Promise


// Возведение в квадрат (асинхронное)
async function squareValue(x) { return x * x; }

// Удвоение значения (асинхронное)
async function doubleValue(x) { return x * 2; }

// Возврат константы -2 (асинхронное)
async function constantNegativeTwo() { return -2; }

// Деление пополам (асинхронное)
async function halveValue(x) { return x / 2; }

// Добавление 5 (асинхронное)
async function addFive(x) { return x + 5; }

// Смена знака (асинхронное)
async function negateValue(x) { return -x; }


 // Основная функция вычислений
 // Принимает начальное значение и массив операций
 // Последовательно применяет операции и суммирует результаты

async function computeCompositeFunction(inputValue, operations) {
    let accumulatedResult = 0; // Накопитель результатов
    
    // Последовательное выполнение всех операций
    for (let i = 0; i < operations.length; i++) {
        const operation = operations[i];
        
        // Особый случай для функции constantNegativeTwo (не требует входного значения)
        const operationResult = operation.name === 'constantNegativeTwo' 
            ? await operation() 
            : await operation(inputValue);
            
        // Накопление результата
        accumulatedResult += operationResult;
        
        // Детальное логирование
        console.log(`Операция ${i + 1} вернула ${operationResult}, текущая сумма: ${accumulatedResult}`);
    }
    
    return accumulatedResult;
}


 // Функция демонстрации примеров
 // Показывает три варианта использования computeCompositeFunction

async function runExamples() {
    try {
        // Пример A: 2 операции
        console.log('a. 2 операции (square + double), x = 3');
        const resultA = await computeCompositeFunction(3, [squareValue, doubleValue]);
        console.log(`Итоговый результат: ${resultA}\n`);

        // Пауза 2 секунды между примерами
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
        console.error('Произошла ошибка:', error);
    }
}


 // lab4_4 - Альтернативная реализация последовательных операций
 // Дополнительные асинхронные функции


async function readConfig(name) {
    await new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
    console.log('(1) config from', name, 'loaded');
}

async function doQuery(statement) {
    await new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
    console.log('(2) SQL query executed:', statement);
}

async function httpGet(url) {
    await new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
    console.log('(3) Page retrieved:', url);
}

async function readFile(path) {
    await new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
    console.log('(4) Readme file from', path, 'loaded');
}

 
 // Альтернативная последовательность операций
 // Аналогична performSequentialOperations, но с другими функциями

async function performAlternativeSequence() {
    try {
        console.log('start');
        
        await readConfig('myConfig');
        await doQuery('select * from cities');
        await httpGet('http://google.com');
        await readFile('README.md');
        
        console.log('It is done!');
        console.log('end');
    } catch (error) {
        console.error('Error:', error);
    }
}


 // Главная исполняемая функция
 // Запускает все примеры последовательно

(async () => {
    // Запуск первого примера
    console.log('Running lab4_2:');
    await performSequentialOperations();
    
    // Запуск второго примера с отступом
    console.log('\nRunning lab4_3:');
    await runExamples();
    
    // Запуск третьего примера с отступом
    console.log('\nRunning lab4_4:');
    await performAlternativeSequence();
})();
