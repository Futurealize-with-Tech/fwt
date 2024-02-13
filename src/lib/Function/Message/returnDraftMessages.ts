import { draftMessageKey } from "@/lib/Key/keys";

export const returnDraftMessages = () => {
    const draftMessages = localStorage.getItem(draftMessageKey);
    const parsedDraftMessages = draftMessages ? JSON.parse(draftMessages) : [];
    return parsedDraftMessages;
};
