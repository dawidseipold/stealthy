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

export interface Chat {
  id: string,
  name: string;
  messages: Message[];
}

export interface ChatStore {
  chats: Chat[];
}

export const [chatsStore, setChatsStore] = createStore<ChatStore>({
  chats: [
    {
      id: "0", name: "chat 1", messages: [
        { sender: "bolton12", content: { text: "Yeah, I'm also pretty good!" } },
        { sender: "quintine3", content: { text: "Nothing much. And you?" } },
        { sender: "bolton12", content: { text: "Hey what is going on with you lately?" } },
      ]
    },
    {
      id: "1", name: "chat 2", messages: [
        { sender: "bolton12", content: { text: "Yeah, I'm good!" } },
        { sender: "quintine3", content: { text: "Nothing much. And you?" } },
        { sender: "bolton12", content: { text: "Hey what's up?" } },
      ]
    },
  ]
});


export const [activeChatStore, setActiveChatStore] = createStore<{ activeChat: Chat | null }>({
  activeChat: null,
});

