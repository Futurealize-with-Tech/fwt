import { draftMessageKey } from "@/lib/Key/keys";
import { DraftMessageType } from "@/types/draftMessageType";

const generateUniqueId = (messages: DraftMessageType[]) => {
    let randomId = '';
    do {
        randomId = Math.random().toString(36).substr(2, 9);
    } while (messages.some(message => message.id === randomId));
    return randomId;
};

export const createDraftMessage = (mentorId: number, body?: string | null, from?: string | null, cardDesign?: number | null) => {
    const draftMessages = localStorage.getItem(draftMessageKey);
    const parsedDraftMessages = draftMessages ? JSON.parse(draftMessages) : [];

    const newDraftMessage = {
        id: generateUniqueId(parsedDraftMessages),
        mentorId: mentorId,
        body: body,
        from: from,
        cardDesign: cardDesign
    };

    localStorage.setItem(
        draftMessageKey,
        JSON.stringify([...parsedDraftMessages, newDraftMessage])
    );
};
