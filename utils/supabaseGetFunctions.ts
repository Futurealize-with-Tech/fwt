import { supabase } from "./supabase";

export const getAllMentorData = async () => {
  const MentorData = await supabase.from("Mentor").select("*");
  return MentorData.data;
};
