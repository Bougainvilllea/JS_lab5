//lab4_2

async function performSequentialOperations() {
    try {
        console.log('Starting sequential operations...');
        
        await loadConfig('myConfig');
        await executeDatabaseQuery('SELECT * FROM cities');
        await fetchWebPage('https://google.com');
        await readProjectFile('README.md');
        
        logCompletion();
        console.log('End of operations');
    } catch (error) {
        console.error('Operation failed:', error);
    }
}

// Запуск
performSequentialOperations();

//lab4_3

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

async function runExamples() {
    try {
        // a. 2 операции
        console.log('a. 2 операции (square + double), x = 3');
        const resultA = await computeCompositeFunction(3, [squareValue, doubleValue]);
        console.log(`Итоговый результат: ${resultA}\n`);

        // b. 4 операции
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('b. 4 операции (square + double + const(-2) + halve), x = 4');
        const resultB = await computeCompositeFunction(4, [
            squareValue, 
            doubleValue, 
            constantNegativeTwo, 
            halveValue
        ]);
        console.log(`Итоговый результат: ${resultB}\n`);

        // c. 6 операций
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

// Запуск
runExamples();

//lab4_4

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

// Запуск
performAlternativeSequence();

        console.log('b. n = 4 (f1 + f2 + f3 + f4), x = 4');
        console.log('Ответ для F(x):', await calculateF(4, [f1, f2, f3, f4]), '\n');

        console.log('c. n = 6 (f1 + f2 + f3 + f4 + f5 + f6), x = 5');
        console.log('Ответ для F(x):', await calculateF(5, [f1, f2, f3, f4, f5, f6]));
    })()
)
