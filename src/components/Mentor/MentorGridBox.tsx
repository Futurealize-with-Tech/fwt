"use client";

import styles from "./mentor.module.scss";
import Image from "next/image";
import CourseBox from "../Course/CourseBox";
import RegionBox from "../Region/RegionBox";
import SendMessageButton from "../UI/Button/Mentor/SendMessageButton";
import { MentorType } from "@/types/mentorType";
import MentorDefaultImage from '@/public/mentor/user_default.jpg';
import { useEffect, useState } from "react";
import { getSentMentorData } from "@/lib/Function/Mentor/getSentMentorData";

export default function MentorGridBox({
  mentorData,
}: {
  mentorData: MentorType;
}) {
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    const mentorIds = getSentMentorData();
    if (mentorIds.includes(mentorData.id)) {
      setIsSent(true);
    };
  }, [mentorData.id]);

  return (
    <div className={styles["container"]}>
      {mentorData.imageUrl ? (
        <img
          src={mentorData.imageUrl}
          alt={mentorData.name}
          className={styles["icon-image"]}
        />
      ): (
        <Image src={MentorDefaultImage} alt={mentorData.name} className={styles['icon-image']} width={200} />
      )}
      <div className={styles['under-container']}>
        <div className={styles["under-box"]}>
          <div className={styles["name-box"]}>
            <p className={styles["name"]}>{mentorData.name}</p>
          </div>
          <div className={styles["course-index-container"]}>
            <div className={styles["region-index"]}>
            {mentorData.regions.map((item) => (
              <RegionBox kind={item.name} key={item.id} />
            ))}
            </div>
            <p className={styles["course-text"]}>Course</p>
            <div className={styles["course-index"]}>
              {mentorData.courses.map((item) => (
                <CourseBox kind={item.name} key={item.id} />
              ))}
            </div>
          </div>
        </div>
        <SendMessageButton id={mentorData.id} isSent={isSent} />
      </div>
    </div>
  );
}
