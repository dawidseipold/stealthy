import { Chat } from "../stores/chats";

export const CHATS: Chat[] = [
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

