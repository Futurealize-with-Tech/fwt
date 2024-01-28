'use client'

import { createContext, useEffect, useState } from "react";
import { MentorType } from "@/types/mentorType";

export const MentorsDataContext = createContext<MentorType[]>([]);

export default function MentorsDataProvider({
    children, mentors,
}: {
    children: React.ReactNode, mentors: MentorType[],
}) {
    const [mentorsData, setMentorsData] = useState<MentorType[]>(mentors);

    useEffect(() => {
        setMentorsData(mentors);
    }, [mentors]);

    return (
        <MentorsDataContext.Provider value={mentorsData}>
        {children}
        </MentorsDataContext.Provider>
    );
};
