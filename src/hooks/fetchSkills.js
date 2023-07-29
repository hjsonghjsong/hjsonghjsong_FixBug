import axios from 'axios';

function createSkillsPayload(workHistoryList, skills) {
    let payload = {
        "experiences": [],
        "job_description": skills[0].helperText,
    };
    workHistoryList.forEach((item) => {
        payload.experiences.push({
            "title": item.jobTitle,
            "bullet_points": item.generatedContent,
        });
    });
    return payload;
    
}
export default async function fetchSkills(workHistoryList, skills) {
    const payload = createSkillsPayload(workHistoryList, skills);
    const response = await axios.post('https://resume-ai-f83e6998ee5a.herokuapp.com/extract/skills', payload);
    return response.data;
}