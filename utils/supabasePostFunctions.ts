import { supabase } from "./supabase";

export const postMessage = async (
  memberName: string,
  message: string,
  id: number
) => {
  await supabase.from("Message").insert({
    memberName: memberName,
    body: message,
    mentorId: id,
    cardDesign: "1",
  });
};
