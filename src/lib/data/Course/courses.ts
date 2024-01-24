import IPhoneImage from '@/public/course/iphone.webp';
import AndroidImage from '@/public/course/android.webp';
import WebDImage from '@/public/course/webd.webp';
import WebSImage from '@/public/course/webs.webp';
import UnityImage from '@/public/course/unity.webp';
import MinecraftImage from '@/public/course/minecraft-icon.png';
import MovieImage from '@/public/course/movie.webp';
import AnimationImage from '@/public/course/animation-icon.png';
import DesignerImage from '@/public/course/designer.png';
import MediaArtImage from '@/public/course/media-art-icon.png';
import DTMImage from '@/public/course/dtm-icon.png';
import MikuImage from '@/public/course/miku-icon.png';
import AIImage from '@/public/course/ai-icon.png';
import { CourseType } from '@/types/courseType';

export const courses = <CourseType[]>[
    {name: 'all', nameText: 'All'},
    {name: 'iphone', nameText: 'iPhone', icon: IPhoneImage},
    {name: 'android', nameText: 'Android', icon: AndroidImage},
    {name: 'webs', nameText: 'WebS', icon: WebSImage},
    {name: 'webd', nameText: 'WebD', icon: WebDImage},
    {name: 'unity', nameText: 'Unity', icon: UnityImage},
    {name: 'minecraft', nameText: 'マイクラ', icon: MinecraftImage},
    {name: 'eizou', nameText: '映像', icon: MovieImage},
    {name: 'animation', nameText: 'アニメーション', icon: AnimationImage},
    {name: 'designer', nameText: 'デザイナー', icon: DesignerImage},
    {name: 'mediaart', nameText: 'メディアアート', icon: MediaArtImage},
    {name: 'dtm', nameText: 'DTM', icon: DTMImage},
    {name: 'miku', nameText: '初音ミク', icon: MikuImage},
    {name: 'ai', nameText: 'AI', icon: AIImage},
];
