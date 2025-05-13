async function conductCandidateInterview(
  candidateName, 
  firstTaskPrepTime, 
  firstTaskDefenseTime, 
  secondTaskPrepTime, 
  secondTaskDefenseTime
) {
    // Первый этап собеседования
    console.log(`${candidateName} начал выполнение первого задания.`);
    await new Promise(resolve => setTimeout(resolve, firstTaskPrepTime * 1000));
    console.log(`${candidateName} перешел к защите первого задания.`);
    await new Promise(resolve => setTimeout(resolve, firstTaskDefenseTime * 1000));
    console.log(`${candidateName} завершил первый этап.`);

    // Перерыв между этапами
    console.log(`${candidateName} делает перерыв.`);
    await new Promise(resolve => setTimeout(resolve, 5 * 1000));

    // Второй этап собеседования
    console.log(`${candidateName} начал выполнение второго задания.`);
    await new Promise(resolve => setTimeout(resolve, secondTaskPrepTime * 1000));
    console.log(`${candidateName} перешел к защите второго задания.`);
    await new Promise(resolve => setTimeout(resolve, secondTaskDefenseTime * 1000));
    console.log(`${candidateName} завершил второй этап.`);
}

async function conductAllInterviews(candidateList) {
    const firstStageInterviews = candidateList.map(candidate =>
        conductCandidateInterview(...candidate)
    );

    // Ожидаем завершения всех первых этапов
    await Promise.all(firstStageInterviews);
}

// Пример использования
const interviewCandidates = [
    ['Иван', 5, 2, 7, 2],
    ['Алексей', 3, 4, 5, 1],
    ['София', 4, 2, 5, 1]
];

conductAllInterviews(interviewCandidates);