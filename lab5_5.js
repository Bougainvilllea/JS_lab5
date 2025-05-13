//lab4_2

function readConfig(name) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('(1) config from ' + name + ' loaded');
            resolve();
        }, Math.random() * 1000);
    });
}

function doQuery(statement) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('(2) SQL query executed: ' + statement);
            resolve();
        }, Math.random() * 1000);
    });
}

function httpGet(url) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('(3) Page retrieved: ' + url);
            resolve();
        }, Math.random() * 1000);
    });
}

function readFile(path) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('(4) Readme file from ' + path + ' loaded');
            resolve();
        }, Math.random() * 1000);
    });
}

// Выполнение через async/await
async function executeTasks() {
    console.log('start');
    try {
        await readConfig('myConfig');
        await doQuery('select * from cities');
        await httpGet('http://google.com');
        await readFile('README.md');
        console.log('It is done!');
    } catch (error) {
        console.error('Error:', error);
    }
    console.log('end');
}

//lab4_3

// Асинхронные функции fi(x)
async function f1(x) {
    await new Promise(resolve => setTimeout(resolve, Math.random() * 500));
    return x ** 2;
}

async function f2(x) {
    await new Promise(resolve => setTimeout(resolve, Math.random() * 500));
    return 2 * x;
}

async function f3(x) {
    await new Promise(resolve => setTimeout(resolve, Math.random() * 500));
    return -2;
}

async function f4(x) {
    await new Promise(resolve => setTimeout(resolve, Math.random() * 500));
    return x / 2;
}

async function f5(x) {
    await new Promise(resolve => setTimeout(resolve, Math.random() * 500));
    return x + 5;
}

async function f6(x) {
    await new Promise(resolve => setTimeout(resolve, Math.random() * 500));
    return -x;
}

// Вычисление F(x)
async function calculateF(x, functions) {
    let intermediateResult = 0;

    for (let i = 0; i < functions.length; i++) {
        const result = await functions[i](x);
        intermediateResult += result;
        console.log(`f${i+1} дает значение ${result}, промежуточный результат ${intermediateResult}`);
    }

    return intermediateResult;
}

//lab4_4

function delayedSum(a, b) {
    return new Promise((resolve, reject) => {
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




executeTasks().then(r => (async () => {
    try {
        console.log('--- Успешное выполнение ---');
        const result1 = await delayedSum(10, 5);
        console.log(`Финальная сумма: ${result1}\n`);

        console.log('--- Вызов с ошибкой ---');
        await delayedSum(10, 'не число');
    } catch (error) {
        console.error('Ошибка:', error.message);
    }
})()).then(r =>
    (async () => {
        console.log('a. n = 2 (f1 + f2), x = 3');
        console.log('Ответ для F(x):', await calculateF(3, [f1, f2]), '\n');

        console.log('b. n = 4 (f1 + f2 + f3 + f4), x = 4');
        console.log('Ответ для F(x):', await calculateF(4, [f1, f2, f3, f4]), '\n');

        console.log('c. n = 6 (f1 + f2 + f3 + f4 + f5 + f6), x = 5');
        console.log('Ответ для F(x):', await calculateF(5, [f1, f2, f3, f4, f5, f6]));
    })()
)
