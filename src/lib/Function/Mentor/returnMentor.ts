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

export const returnMentorByRegion = (selectRegions: string[], mentor: MentorType) => {
    if (selectRegions.length === 0) {
        return true;
    } else {
        for (let i = 0;i < selectRegions.length;i++) {
            if (!mentor.region.includes(selectRegions[i])) {
                return false;
            };
        };

        return true;
    };
};
