export const createWorkHistoryPayload = (workHistoryList, generationState) => {
    return {
        "title": workHistoryList.jobTitle,
        "date": workHistoryList.startDate+" - "+workHistoryList.endDate,
        "description": generationState.helperText,
        "company": workHistoryList.company,
        "num": generationState.numOfPoints
    }
}