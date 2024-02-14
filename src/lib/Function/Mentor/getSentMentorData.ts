import { sentMentorKey } from "@/lib/Key/keys";

export const getSentMentorData = () => {
    const mentorIds = localStorage.getItem(sentMentorKey);
    const parseMentorIds: number[] = mentorIds ? JSON.parse(mentorIds) : [];

    return parseMentorIds;
};
