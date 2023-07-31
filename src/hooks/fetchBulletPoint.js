import axios from 'axios';

function createWorkHistoryPayload(workHistory, context) {
    return {
        "title": workHistory.jobTitle+", "+workHistory.company,
        "date": workHistory.startDate+" - "+workHistory.endDate,
        "description": workHistory.helperText,
        "num": workHistory.numOfPoints,
        "context": context
    }
}
export default async function fetchBulletPoint(workHistory, context) {
    const payload = createWorkHistoryPayload(workHistory, context);
    const response = await axios.post('https://resume-ai-f83e6998ee5a.herokuapp.com/generate/bullet_points', payload);
    return response.data;
}