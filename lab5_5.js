function delayedSum(a, b) {
    return new Promise((resolve, reject) => {
        // Проверка входных параметров
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject(new Error('Оба аргумента должны быть числами'));
            return;
        }

        let iteration = 0;
        let currentSum = a;
        const originalB = b;

        const intervalId = setInterval(() => {
            iteration++;
            currentSum += originalB;

            console.log(`Итерация ${iteration}: сумма = ${currentSum}`);

            if (iteration === 5) {
                clearInterval(intervalId);
                resolve(currentSum);
            }
        }, 2000);
    });
}

console.log('--- Успешное выполнение ---');
delayedSum(10, 5)
    .then(finalSum => console.log(`Финальная сумма: ${finalSum}`))
    .catch(error => console.error('Ошибка:', error.message));


console.log('--- Вызов с ошибкой ---');
delayedSum(10, 'не число')
    .then(finalSum => console.log(`Финальная сумма: ${finalSum}`))
    .catch(error => console.error('Ошибка:', error.message));
