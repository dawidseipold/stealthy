// NOTE: Dummy data for now later on fetched from the backend

import { createStore } from "solid-js/store";

export interface Conversation {
  id: number,
  username: string;
  name: string;
}

export interface ConversationsStore {
  conversations: Conversation[];
}


export const [conversationsStore, setConversationsStore] = createStore<ConversationsStore>({
  conversations: [
    { id: 0, username: "felix909", name: "chat 1" },
    { id: 1, username: "tracy634", name: "chat 2" },
    { id: 2, username: "johny123", name: "chat 3" }
  ]
});
