import { supabase } from "./supabase";

export const postMessage = async (memberName, message) => {
  await supabase
    .from("message")
    .insert({ member_name: memberName, body: message });
};
