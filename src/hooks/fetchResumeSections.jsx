import { useEffect, useState } from "react";
import { supabase } from "../SupabaseCL";

const useFetchResumeSections = (resumeId) => {
  const [sectionData, setSectionData] = useState([]);

  useEffect(() => {
    const fetchResumeSections = async () => {
      try {
        if (!resumeId) {
          return;
        }
        const { data: experiences, error } = await supabase
          .from("experiences")
          .select("*")
          .eq("resume_id", resumeId);
        if (error) throw error;
        setSectionData(experiences);
      } catch (error) {
        console.log(error);
      }
    };
    fetchResumeSections();
  }, [resumeId]);

  return sectionData;
};

export default useFetchResumeSections;
