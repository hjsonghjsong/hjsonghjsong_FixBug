import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

const sendResumeInfoToSupabase = async (payload) => {
  try {
    const { data, error } = await supabase
      .from("resumes")
      .insert(payload)
      .select("id");

    if (error) {
      console.error("Error sending resume info:", error);
      return null;
    }

    if (data && data.length > 0) {
      return data[0]?.id;
    } else {
      console.error("No ID received after sending resume info.");
      return null;
    }
  } catch (error) {
    console.error("An unexpected error occurred:", error);
    return null;
  }
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
    })
    .eq("id", resumeId)
    .select();
  console.log(data, error);
};

export {
  supabase,
  sendResumeInfoToSupabase,
  sendExperienceInfoToSupabase,
  deleteResumesFromSupabase,
  sendResumeFeedback,
};
