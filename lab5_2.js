// Объявляем асинхронную функцию readProjectFile, которая принимает путь к файлу
function readProjectFile(filePath) {
    // Возвращаем новый Promise, который будет выполнен асинхронно
    return new Promise((resolve) => {
        // Имитируем асинхронную загрузку файла с помощью setTimeout
        setTimeout(() => {
            // Выводим сообщение о загрузке файла (4 по порядку)
            console.log('(4) Project file loaded:', filePath);
            // Разрешаем Promise, сигнализируя о завершении операции
            resolve();
        }, Math.floor(Math.random() * 1000)); // Случайная задержка до 1 секунды
    });
}

// Объявляем асинхронную функцию loadConfig для загрузки конфигурации
function loadConfig(configName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Выводим сообщение о загрузке конфига (1 по порядку)
            console.log('(1) Config loaded from:', configName);
            resolve();
        }, Math.floor(Math.random() * 1000));
    });
}

// Функция для асинхронного получения веб-страницы
function fetchWebPage(pageUrl) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Выводим сообщение о получении страницы (3 по порядку)
            console.log('(3) Web page retrieved:', pageUrl);
            resolve();
        }, Math.floor(Math.random() * 1000));
    });
}

// Функция для асинхронного выполнения запроса к базе данных
function executeDatabaseQuery(query) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Выводим сообщение о выполнении запроса (2 по порядку)
            console.log('(2) Database query executed:', query);
            resolve();
        }, Math.floor(Math.random() * 1000));
    });
}

// Дополнительная функция для выполнения запроса (альтернативная версия)
function doQuery(statement) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Выводим сообщение о выполнении доп. запроса (2a по порядку)
            console.log('(2a) Additional query executed:', statement);
            resolve();
        }, Math.floor(Math.random() * 1000));
    });
}

// Дополнительная функция для HTTP GET запроса (альтернативная версия)
function httpGet(url) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Выводим сообщение о HTTP GET запросе (3a по порядку)
            console.log('(3a) HTTP GET:', url);
            resolve();
        }, Math.floor(Math.random() * 1000));
    });
}

// Дополнительная функция для чтения файла (альтернативная версия)
function readFile(path) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Выводим сообщение о чтении файла (4a по порядку)
            console.log('(4a) File read:', path);
            resolve();
        }, Math.floor(Math.random() * 1000));
    });
}

// Функция для вывода сообщения о завершении всех операций
function logCompletion() {
    console.log('All operations completed successfully!');
}

// Выводим сообщение о начале выполнения последовательных операций
console.log('Starting sequential operations...');

// Начинаем основную цепочку Promise:
// 1. Сначала загружаем конфиг
loadConfig('myConfig')
    // 2. После загрузки конфига выполняем запрос к БД
    .then(() => executeDatabaseQuery('SELECT * FROM cities'))
    // 3. После запроса к БД получаем веб-страницу
    .then(() => fetchWebPage('https://google.com'))
    // 4. После получения страницы читаем файл проекта
    .then(() => readProjectFile('README.md'))
    // После завершения основной цепочки:
    .then(() => {
        // Выводим сообщение о завершении
        logCompletion();
        console.log('End of operations');
        
        // Начинаем дополнительную цепочку Promise:
        // 1. Выполняем дополнительный запрос
        return doQuery('select * from cities')
            // 2. После запроса выполняем HTTP GET
            .then(() => httpGet('http://google.com'))
            // 3. После GET запроса читаем файл
            .then(() => readFile('README.md'))
            // После завершения дополнительной цепочки:
            .then(() => {
                console.log('It is done!');
                console.log('end');
            });
    })
    // Обрабатываем возможные ошибки в любой из цепочек
    .catch((error) => {
        console.error('Error:', error);
    });
