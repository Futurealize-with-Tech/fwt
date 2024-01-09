import { MentorType } from "@/types/mentorType";

export const returnMentorByCategory = (selectCategorys: string[], mentor: MentorType) => {
    if (selectCategorys.length === 0) {
        return true;
    } else {
        for (let i = 0;i < selectCategorys.length;i++) {
            if (!mentor.course.includes(selectCategorys[i])) {
                return false;
            };
        };

        return true;
    };
};

export const returnMentorByRegion = (region: string, mentor: MentorType) => {
    if (region === '' || mentor.region === region) {
        return true;
    } else {
        return false;
    };
};
