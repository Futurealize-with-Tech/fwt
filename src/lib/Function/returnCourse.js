import IPhoneImage from '@/public/course/iphone.webp';
import AndroidImage from '@/public/course/android.webp';
import WebDImage from '@/public/course/webd.webp';
import WebSImage from '@/public/course/webs.webp';
import UnityImage from '@/public/course/unity.webp';

export const returnCourse = (kind) => {
    switch (kind) {
        case 'iphone':
            return {name: 'iPhone', icon: IPhoneImage};
        case 'android':
            return {name: 'Android', icon: AndroidImage};
        case 'webs':
            return {name: 'WebS', icon: WebSImage};
        case 'webd':
            return {name: 'WebD', icon: WebDImage};
        case 'unity':
            return {name: 'Unity', icon: UnityImage};
        default:
            return {name: 'その他', icon: IPhoneImage};
    };
};
