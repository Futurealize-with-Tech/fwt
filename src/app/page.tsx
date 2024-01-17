"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.scss";
import MentorIndex from "@/components/Home/MentorIndex";

const getMentorData = async () => {
  const res = await fetch("http://localhost:3000/api/fwt");
  const json = await res.json();
  return json.mentors;
};

export default function Home() {
  const [mentorList, setMentorList] = useState<any[]>([]);

  // const mentorList = getMentorData();
  useEffect(() => {
    const fetchMentorData = async () => {
      const res = await fetch("http://localhost:3000/api/fwt");
      const json = await res.json();
      setMentorList(json.mentors);
    };

    fetchMentorData();
  }, []);

  return (
    <>
      <div className={styles["container"]}>
        <MentorIndex />
      </div>
      {mentorList.map((mentor: any) => (
        <div key={mentor.id}>{mentor.name}</div>
      ))}
    </>
  );
}
