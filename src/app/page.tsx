import React from "react";
import styles from "./page.module.scss";
import MentorIndex from "@/components/Home/MentorIndex";

const getMentorList = async () => {
  const res = await fetch("http://localhost:3000/api/v1/mentors");
  const json = await res.json();
  return json.mentors;
};

export default function Home() {
  return (
    <div className={styles["container"]}>
      <MentorIndex />
    </div>
  );
}
