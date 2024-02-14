import { sentMentorKey } from "@/lib/Key/keys";
import { getSentMentorData } from "./getSentMentorData";

export const saveSentMentorData = (id: number) => {
    const mentorIds = getSentMentorData();
    const newMentorIds = JSON.stringify([...mentorIds, id]);

    localStorage.setItem(sentMentorKey, newMentorIds);
};
