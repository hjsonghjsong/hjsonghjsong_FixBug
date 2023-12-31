import {
  sendResumeInfoToSupabase,
  sendExperienceInfoToSupabase,
} from "../SupabaseCL";

const createResumePayload = (state) => {
  return {
    user_id: state?.user?.id,
    job_desc: state?.jobPreferenceState.jobTitle,
    skills: state?.skills[0].generatedContent,
    feedback: state?.feedback
  };
};

const createExperiencePayload = (
  resumeId,
  experiencePayload,
  state,
  context
) => {
  if (context === "Work Experience") {
    state?.workHistoryList?.forEach((workHistory) => {
      experiencePayload.push({
        resume_id: resumeId,
        context: context,
        title: workHistory.jobTitle,
        start_date: workHistory.startDate,
        end_date: workHistory.endDate,
        description: workHistory.helperText,
        bullet_points: workHistory.selectedContent,
      });
    });
  } else if (context === "Project") {
    state?.projectHistoryList?.forEach((projectHistory) => {
      experiencePayload.push({
        resume_id: resumeId,
        context: context,
        title: projectHistory.company,
        start_date: projectHistory.startDate,
        end_date: projectHistory.endDate,
        description: projectHistory.helperText,
        bullet_points: projectHistory.selectedContent,
      });
    });
  }
  return experiencePayload;
};

export const SendResumeInfo = async (state, feedback) => {
  let experiencePayload = [];
  state.feedback = feedback;
  const resumePayload = createResumePayload(state);
  const resumeId = await sendResumeInfoToSupabase(resumePayload);
  experiencePayload = createExperiencePayload(
    resumeId,
    experiencePayload,
    state,
    "Work Experience"
  );
  experiencePayload = createExperiencePayload(
    resumeId,
    experiencePayload,
    state,
    "Project"
  );
  await sendExperienceInfoToSupabase(experiencePayload);
};
