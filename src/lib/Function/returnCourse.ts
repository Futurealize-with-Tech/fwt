import IPhoneImage from '@/public/course/iphone.webp';
import { courses } from '../data/Course/courses';

export const returnCourse = (kind: string) => {
    const course = courses.find((course) => course.name === kind);
    if (course) {
        return course;
    } else {
        return {name: '?', nameText: '?', icon: IPhoneImage};
    };
};
