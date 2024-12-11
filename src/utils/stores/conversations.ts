// NOTE: Dummy data for now later on fetched from the backend

import { createStore } from "solid-js/store";

export type Attachment = {
  type: "image" | "video" | "file";
  name: string
}

export interface Message {
  sender: string;
  content: {
    text: string;
    attachment?: Attachment;
  }
}

export interface Conversation {
  id: number,
  username: string;
  name: string;
  messages: Message[];
}

export interface ConversationsStore {
  conversations: Conversation[];
}

export const [conversationsStore, setConversationsStore] = createStore<ConversationsStore>({
  conversations: [
    {
      id: 0, username: "bolton12", name: "chat 1", messages: [
        { sender: "bolton12", content: { text: "Hey what's up?" } },
        { sender: "quintine3", content: { text: "Nothing much. And you?" } },
        { sender: "bolton12", content: { text: "Yeah, I'm good!" } },
      ]
    },
    {
      id: 1, username: "bolton12", name: "chat 2", messages: [
        { sender: "bolton12", content: { text: "Hey what's up?" } },
        { sender: "quintine3", content: { text: "Nothing much. And you?" } },
        { sender: "bolton12", content: { text: "Yeah, I'm good!" } },
      ]
    },
  ]
});


export const [activeConversationStore, setActiveConversationStore] = createStore<{ activeConversation: Conversation | null }>({
  activeConversation: null,
});

