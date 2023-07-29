import axios from 'axios';

function createWorkHistoryPayload(workHistory) {
    return {
        "title": workHistory.jobTitle,
        "date": workHistory.startDate+" - "+workHistory.endDate,
        "description": workHistory.helperText,
        "company": workHistory.company,
        "num": workHistory.numOfPoints
    }
}
export default async function fetchBulletPoint(workHistory) {
    const payload = createWorkHistoryPayload(workHistory);
    const response = await axios.post('https://resume-ai-f83e6998ee5a.herokuapp.com/generate/bullet_points', payload);
    return response.data;
}