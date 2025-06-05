// Асинхронная функция для проведения интервью с кандидатом
// Принимает параметры:
// - candidateName: имя кандидата
// - firstTaskPrepTime: время подготовки к первому заданию (в секундах)
// - firstTaskDefenseTime: время защиты первого задания
// - secondTaskPrepTime: время подготовки ко второму заданию
// - secondTaskDefenseTime: время защиты второго задания
async function conductCandidateInterview(
  candidateName, 
  firstTaskPrepTime, 
  firstTaskDefenseTime, 
  secondTaskPrepTime, 
  secondTaskDefenseTime
) {
    // Первый этап собеседования
    
    // Сообщение о начале первого задания
    console.log(`${candidateName} начал выполнение первого задания.`);
    
    // Ожидание времени подготовки (переводим секунды в миллисекунды)
    await new Promise(resolve => setTimeout(resolve, firstTaskPrepTime * 1000));
    
    // Сообщение о переходе к защите первого задания
    console.log(`${candidateName} перешел к защите первого задания.`);
    
    // Ожидание времени защиты
    await new Promise(resolve => setTimeout(resolve, firstTaskDefenseTime * 1000));
    
    // Сообщение о завершении первого этапа
    console.log(`${candidateName} завершил первый этап.`);

    // Перерыв между этапами
    
    // Сообщение о перерыве
    console.log(`${candidateName} делает перерыв.`);
    
    // Фиксированное время перерыва - 5 секунд
    await new Promise(resolve => setTimeout(resolve, 5 * 1000));

    // Второй этап собеседования
    
    // Сообщение о начале второго задания
    console.log(`${candidateName} начал выполнение второго задания.`);
    
    // Ожидание времени подготовки
    await new Promise(resolve => setTimeout(resolve, secondTaskPrepTime * 1000));
    
    // Сообщение о переходе к защите
    console.log(`${candidateName} перешел к защите второго задания.`);
    
    // Ожидание времени защиты
    await new Promise(resolve => setTimeout(resolve, secondTaskDefenseTime * 1000));
    
    // Сообщение о завершении второго этапа
    console.log(`${candidateName} завершил второй этап.`);
}

// Асинхронная функция для проведения всех интервью
// Принимает список кандидатов (массив параметров для каждого)
async function conductAllInterviews(candidateList) {
    // Запускаем первый этап для всех кандидатов параллельно
    // map создает массив промисов (по одному на каждого кандидата)
    const firstStageInterviews = candidateList.map(candidate =>
        conductCandidateInterview(...candidate)
    );

    // Ожидаем завершения всех первых этапов
    // Promise.all ждет выполнения всех промисов в массиве
    await Promise.all(firstStageInterviews);
}

// Список кандидатов с параметрами для интервью:
// Каждый элемент массива - параметры для conductCandidateInterview:
// [имя, подготовка1, защита1, подготовка2, защита2]
const interviewCandidates = [
    ['Иван', 5, 2, 7, 2],    // Иван: 5с подготовка1, 2с защита1, 7с подготовка2, 2с защита2
    ['Алексей', 3, 4, 5, 1], // Алексей: 3с, 4с, 5с, 1с
    ['София', 4, 2, 5, 1]    // София: 4с, 2с, 5с, 1с
];

// Запуск процесса проведения всех интервью
conductAllInterviews(interviewCandidates);
