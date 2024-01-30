import { draftMessageKey } from "@/lib/Key/keys";

export const deleteDraftMessage = (ids: string[]) => {
    const draftMessages = localStorage.getItem(draftMessageKey);
    const parsedDraftMessages = draftMessages ? JSON.parse(draftMessages) : [];

    const newDraftMessages = parsedDraftMessages.filter((message: any) => {
        return !ids.includes(message.id);
    });

    localStorage.setItem(
        draftMessageKey,
        JSON.stringify(newDraftMessages)
    );
};
