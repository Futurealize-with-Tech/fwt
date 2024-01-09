"use client";

import styles from "./mentor.module.scss";
import CourseBox from "../Course/CourseBox";
import RegionBox from "../Region/RegionBox";
import { MemberFormModal } from "../form/MemberFormModal";
import { MentorType } from "@/types/mentorType";

export default function MentorGridBox({
  mentorData,
}: {
  mentorData: MentorType,
}) {

  return (
    <div className={styles["container"]}>
      <img src={mentorData.image} alt={mentorData.name} className={styles["icon-image"]} />
      <div className={styles["under-box"]}>
        <div className={styles["name-box"]}>
          <p className={styles["name"]}>{mentorData.name}</p>
          <RegionBox kind={mentorData.region} />
        </div>
        <div className={styles["course-index-container"]}>
          <p className={styles["course-text"]}>Course</p>
          <div className={styles["course-index"]}>
            {mentorData.course.map((item) => (
              <CourseBox kind={item} key={item} />
            ))}
          </div>
        </div>
      </div>
      <MemberFormModal />
    </div>
  );
}
