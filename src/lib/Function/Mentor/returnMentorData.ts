import { MentorType } from "@/types/mentorType";

export const returnMentorData = (mentors: MentorType[], id: number) => {
    const mentorData = mentors.find(mentor => mentor.id === id);
    return mentorData;
};
