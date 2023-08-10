import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

const sendResumeInfoToSupabase = async (payload) => {
  const { data, error } = await supabase
    .from("resumes")
    .insert(payload)
    .select("id");
  console.log(data, error);
  return data[0].id;
};

const sendExperienceInfoToSupabase = async (payload) => {
  const { data, error } = await supabase.from("experiences").insert(payload);
  console.log(data, error);
};

const deleteResumesFromSupabase = async (resumeId) => {
  console.log(resumeId);
  const { error } = await supabase.from("resumes").delete().eq("id", resumeId);
};

const sendResumeFeedback = async (feedback, resumeId) => {
  const { data, error } = await supabase
      .from("resumes")
      .update({
        feedback: feedback,
      }).eq("id", resumeId)
      .select();
  console.log(data, error);
};


export {
  supabase,
  sendResumeInfoToSupabase,
  sendExperienceInfoToSupabase,
  deleteResumesFromSupabase,
  sendResumeFeedback
};
