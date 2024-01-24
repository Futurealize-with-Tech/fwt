import { MentorCourseType } from "./courseType";
import { MentorRegionType } from "./regionType";

export type MentorType = {
    id: number,
    name: string,
    imageUrl?: string,
    courses: MentorCourseType[],
    regions: MentorRegionType[],
};
