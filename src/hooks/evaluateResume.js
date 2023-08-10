import axios from 'axios';
import { sendResumeFeedback } from '../SupabaseCL';

const evaluateCourses = async (courses, jobTitle) => {
    const payload = {
        "course_list": courses,
        "job_description": jobTitle
    }
    const response = await axios.post('https://resume-ai-f83e6998ee5a.herokuapp.com/evaluate/courses', payload);
    return response.data;
}

const evaluateSkills = async (skills, jobTitle) => {
    const payload = {
        "skills": ['Python', 'R'],
        "job_description": 'Software Engineer'
    }
    const response = await axios.post('https://resume-ai-f83e6998ee5a.herokuapp.com/evaluate/skills', payload);
    return response.data;
}
const formatWorkHistory = (workHistoryList) => {
    let formattedWorkHistoryList = [];
    workHistoryList.forEach((workHistory) => {
        formattedWorkHistoryList.push({
            "title": workHistory.jobTitle,
            "date": workHistory.startDate+' - '+workHistory.endDate,
            "description": workHistory.helperText,
            "bullet_points": workHistory.generatedContent
        });
    });
    return formattedWorkHistoryList;
}

const formatProjectHistory = (projectHistoryList) => {
    let formattedProjectHistoryList = [];
    projectHistoryList.forEach((projectHistory) => {
        formattedProjectHistoryList.push({
            "title": projectHistory.company,
            "date": projectHistory.startDate+' - '+projectHistory.endDate,
            "description": projectHistory.helperText,
            "bullet_points": projectHistory.generatedContent
        });
    });
    return formattedProjectHistoryList;
}

//function takes a comma separated string and returns a list of strings
const formatCourseList = (courseList) => {
    return courseList.split(',');   
}

const evaluateBulletPoints = async (workHistoryList, projectHistoryList, jobTitle) => {
    const payload = {
        "experiences": formatWorkHistory(workHistoryList),
        "projects": formatProjectHistory(projectHistoryList),
        "desired_jd": jobTitle
    }
    const response = await axios.post('https://resume-ai-f83e6998ee5a.herokuapp.com/evaluate/bullet_points', payload);
    return response.data;
}

const evaluateEntireResume = async (state) => {
    const payload = {
        "full_name": state.personalDetailState.firstName + ' ' + state.personalDetailState.lastName,
        "contact": [state.personalDetailState.email, state.personalDetailState.phone],
        "location": "San Francisco, CA",
        "links": [],
        "honors": state.educationDetailList[0].degree,
        "degree": state.educationDetailList[0].degree,
        "grad_location": state.educationDetailList[0].location,
        "grad_date": state.educationDetailList[0].endYear,
        "gpa": state.educationDetailList[0].gpa,
        "courses": formatCourseList(state.educationDetailList[0].courseList),
        "skills": state.skills[0].generatedContent,
        "experiences": formatWorkHistory(state.workHistoryList),
        "projects": formatProjectHistory(state.projectHistoryList),
        "professional_summary": "A short summary about myself",
        "desired_jd": state.jobPreferenceState.jobTitle
    }
    const response = await axios.post('https://resume-ai-f83e6998ee5a.herokuapp.com/evaluate/resume', payload);
    return response.data;
}

const evaluateFormat = async (state) => {
    const payload = {
        'degree': state.educationList[0].degree,
        'grad_loc': state.educationList[0].location,
        'grad_date': state.educationList[0].endYear,
        'gpa': state.educationList[0].gpa,
        'honors': state.educationList[0].degree,
        'courses': state.educationList[0].courseList,
        'skills': state.skills[0].generatedContent,
        'experiences': state.workHistoryList,
        'projects': state.projectHistoryList,
        'professional_summary': '',
        'desired_jd': state.jobPreferenceState.jobTitle
    }
    const response = await axios.post('https://resume-ai-f83e6998ee5a.herokuapp.com/evaluate/format', payload);
    return response.data;
}

const evaluateDateFormat = async (workHistoryList, projectHistoryList) => {
    const payload = {
        'experiences': workHistoryList,
        'projects': projectHistoryList
    }
    const response = await axios.post('https://resume-ai-f83e6998ee5a.herokuapp.com/evaluate/date_format', payload);
    return response.data;
}

const evaluateContact = async (personalDetail) => {
    const payload = {
        'full_name': personalDetail.firstName + ' ' + personalDetail.lastName,
        'contact': personalDetail.email,
        'location': personalDetail.location,
        'links': personalDetail.socialList
    }
    const response = await axios.post('https://resume-ai-f83e6998ee5a.herokuapp.com/evaluate/contact', payload);
    return response.data;
}

const evaluateExperiences = async (workHistoryList, projectHistoryList) => {
    const payload = {
        'experiences': workHistoryList,
        'projects': projectHistoryList
    }
    const response = await axios.post('https://resume-ai-f83e6998ee5a.herokuapp.com/evaluate/experiences', payload);
    return response.data;
}

const evaluateKeywords = async (workHistoryList, projectHistoryList, jobTitle) => {
    const payload = {
        'experiences': workHistoryList,
        'projects': projectHistoryList,
        'desired_jd': jobTitle
    }
    const response = await axios.post('https://resume-ai-f83e6998ee5a.herokuapp.com/evaluate/keywords', payload);
    return response.data;
}

const evaluateSoftSkills = async (workHistoryList, projectHistoryList, jobTitle) => {
    const payload = {
        'experiences': workHistoryList,
        'projects': projectHistoryList,
        'desired_jd': jobTitle
    }
    const response = await axios.post('https://resume-ai-f83e6998ee5a.herokuapp.com/evaluate/soft-skills', payload);
    return response.data;
}
// btw bad design here, but I'm just trying to get it to work, frontend shoud not be calling this many endpoints

export const evaluateResume = async (state, resumeId) => {
    // //send to evaluate/courses endpoint
    // const scoreCourses = await evaluateCourses(state.educationDetailList[0].courseList, state.jobPreferenceState.jobTitle);
    // //send to evaluate/skills endpoint
    // const scoreSkills = await evaluateSkills(state.skills[0].generatedContent, state.jobPreferenceState.jobTitle);
    // //send to evaluate/bullet_points endpoint
    // const scoreBulletPoint = evaluateBulletPoints(state.workHistoryList, state.projectHistoryList, state.jobPreferenceState.jobTitle);
    // //send to evaluate/Resume endpoint
    const resumeFeedback = await evaluateEntireResume(state);
    await sendResumeFeedback(resumeFeedback, resumeId);
    // //send to evaluate/format endpoint
    // const scoreFormat = await evaluateFormat(state);
    // //send to evaluate/dateFormat endpoint
    // const scoreDateFormat = await evaluateDateFormat(state.workHistoryList, state.projectHistoryList);
    // //send to evaluate/contact endpoint
    // const scoreContact = await evaluateContact(state.personalDetail);
    // //send to evaluate/experiences endpoint
    // const scoreExperience = await evaluateExperiences(state.workHistoryList, state.projectHistoryList);
    // //send to evaluate/keywords endpoint
    // const scoreKeyword = await evaluateKeywords(state.workHistoryList, state.projectHistoryList, state.jobPreferenceState.jobTitle);
    // //send to evaluate/soft-skills endpoint
    // const scoreSoftSkills = await evaluateSoftSkills(state.workHistoryList, state.projectHistoryList, state.jobPreferenceState.jobTitle);
    
};