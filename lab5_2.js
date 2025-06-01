function loadConfig(configName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('(1) Config loaded from:', configName);
            resolve();
        }, Math.floor(Math.random() * 1000));
    });
}

function executeDatabaseQuery(query) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('(2) Database query executed:', query);
            resolve();
        }, Math.floor(Math.random() * 1000));
    });
}

function fetchWebPage(pageUrl) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('(3) Web page retrieved:', pageUrl);
            resolve();
        }, Math.floor(Math.random() * 1000));
    });
}

function readProjectFile(filePath) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('(4) Project file loaded:', filePath);
            resolve();
        }, Math.floor(Math.random() * 1000));
    });
}

function logCompletion() {
    console.log('All operations completed successfully!');
}

console.log('Starting sequential operations...');

loadConfig('myConfig')
    .then(() => executeDatabaseQuery('SELECT * FROM cities'))
    .then(() => fetchWebPage('https://google.com'))
    .then(() => readProjectFile('README.md'))
    .then(() => {
        logCompletion();
        console.log('End of operations');
    })
    .catch((error) => {
        console.error('Operation failed:', error);
    });
    .then(() => doQuery('select * from cities'))
    .then(() => httpGet('http://google.com'))
    .then(() => readFile('README.md'))
    .then(() => {
        console.log('It is done!');
        console.log('end');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
