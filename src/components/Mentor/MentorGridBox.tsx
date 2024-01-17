"use client";

import styles from "./mentor.module.scss";
import CourseBox from "../Course/CourseBox";
import RegionBox from "../Region/RegionBox";
import { MentorType } from "@/types/mentorType";
import SendMessageButton from "../UI/Button/Mentor/SendMessageButton";
import { getAllMentorData } from "../../../utils/supabaseGetFunctions";

export default function MentorGridBox({
  mentorData,
}: {
  mentorData: MentorType;
}) {
  return (
    <div className={styles["container"]}>
      <img
        src={mentorData.image}
        alt={mentorData.name}
        className={styles["icon-image"]}
      />
      <div className={styles["under-box"]}>
        <div className={styles["name-box"]}>
          <p className={styles["name"]}>{mentorData.name}</p>
        </div>
        <div className={styles["course-index-container"]}>
          <div className={styles["region-index"]}>
          {mentorData.region.map((item) => (
            <RegionBox kind={item} key={item} />
          ))}
          </div>
          <p className={styles["course-text"]}>Course</p>
          <div className={styles["course-index"]}>
            {mentorData.course.map((item) => (
              <CourseBox kind={item} key={item} />
            ))}
          </div>
        </div>
      </div>
      <SendMessageButton id={mentorData.id} />
    </div>
  );
}
