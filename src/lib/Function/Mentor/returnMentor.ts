import { MentorType } from "@/types/mentorType";

export const returnMentorByCategory = (selectCategorys: string[], mentor: MentorType) => {
    if (selectCategorys.length === 0) {
        return true;
    } else {
        for (let i = 0;i < selectCategorys.length;i++) {
            if (!mentor.courses.some(course => course.name === selectCategorys[i])) {
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
            if (!mentor.regions.some(region => region.name === selectRegions[i])) {
                return false;
            };
        };

        return true;
    };
};
