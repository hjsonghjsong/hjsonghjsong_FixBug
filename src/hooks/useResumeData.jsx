import { useEffect, useState } from "react";
import { supabase } from "../SupabaseCL";

const useResumeData = (user_id) => {
  const [filesData, setFilesData] = useState([]);

  useEffect(() => {
    const fetchUserResumes = async () => {
      try {
        if (!user_id) {
          return;
        }

        const { data, error } = await supabase
          .from("resumes")
          .select("*")
          .eq("user_id", user_id)
          .order("edited_at", { ascending: false });

        if (error) {
          throw error;
        }

        if (data && data.length > 0) {
          setFormattedDates(data);
        }
      } catch (error) {
        console.error("Error fetching user resumes:", error);
      }
    };

    fetchUserResumes();
  }, [user_id]);

  const setFormattedDates = (data) => {
    const updatedData = data.map((resume) => ({
      ...resume,
      created_at: new Date(resume.created_at).toLocaleDateString(),
      edited_at: new Date(resume.edited_at).toLocaleDateString(),
    }));

    setFilesData(updatedData);
  };

  return filesData;
};

export default useResumeData;
