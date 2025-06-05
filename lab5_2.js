// Объявляем функцию readProjectFile, которая принимает путь к файлу
function readProjectFile(filePath) {
    // Возвращаем новый Promise, который будет выполнен асинхронно
    return new Promise((resolve) => {
        // Устанавливаем таймер для имитации асинхронной операции
        setTimeout(() => {
            // Выводим сообщение о загрузке файла (4 по порядку)
            console.log('(4) Project file loaded:', filePath);
            // Разрешаем Promise
            resolve();
        }, Math.floor(Math.random() * 1000)); // Случайная задержка до 1 секунды
    });
}

// Объявляем функцию loadConfig для загрузки конфигурации
function loadConfig(configName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Выводим сообщение о загрузке конфига (1 по порядку)
            console.log('(1) Config loaded from:', configName);
            resolve();
        }, Math.floor(Math.random() * 1000));
    });
}

// Функция для получения веб-страницы
function fetchWebPage(pageUrl) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Выводим сообщение о получении страницы (3 по порядку)
            console.log('(3) Web page retrieved:', pageUrl);
            resolve();
        }, Math.floor(Math.random() * 1000));
    });
}

// Функция для выполнения запроса к базе данных
function executeDatabaseQuery(query) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Выводим сообщение о выполнении запроса (2 по порядку)
            console.log('(2) Database query executed:', query);
            resolve();
        }, Math.floor(Math.random() * 1000));
    });
}

// Функция для вывода сообщения о завершении операций
function logCompletion() {
    console.log('All operations completed successfully!');
}

// Выводим сообщение о начале последовательных операций
console.log('Starting sequential operations...');

// Начинаем цепочку Promise'ов:
loadConfig('myConfig') // 1. Загружаем конфиг
    .then(() => executeDatabaseQuery('SELECT * FROM cities')) // 2. После конфига выполняем запрос к БД
    .then(() => fetchWebPage('https://google.com')) // 3. После БД получаем веб-страницу
    .then(() => readProjectFile('README.md')) // 4. После страницы читаем файл проекта
    .then(() => {
        logCompletion(); // Выводим сообщение о завершении
        console.log('End of operations'); // Конец операций
    })
    .catch((error) => {
        console.error('Operation failed:', error); // Обработка ошибок
    });
    // Здесь есть синтаксическая ошибка - точка с запятой перед then
    .then(() => doQuery('select * from cities')) // Эта строка не выполнится из-за ошибки
    .then(() => httpGet('http://google.com')) // Эти функции не определены в коде
    .then(() => readFile('README.md')) // и будут вызывать ошибку
    .then(() => {
        console.log('It is done!');
        console.log('end');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
