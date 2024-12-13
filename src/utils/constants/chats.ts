import { Chat, ChatPreview } from "../stores/chats";

export const CHATS_PREVIEWS: ChatPreview[] = [
  {
    id: "0",
    name: "chat 0",
    lastMessage: {
      sender: "person_1",
      content: {
        text: "last message"
      }
    },
  },
  {
    id: "1",
    name: "chat 1",
    lastMessage: {
      sender: "person_1",
      content: {
        text: "last message"
      }
    },
  },
]

// INFO: DUMMY DATA LATER REPLACED WITH INDIVIDUALLY FETCHED CHAT FROM A DATABASE, NOW JUST ITS JUST A FILTERED ARRAY
export const CHATS: Chat[] = [
  {
    id: "0",
    name: "Chat 0",
    messages: [
      {
        sender: "person_1",
        content: {
          text: "last message"
        }
      },
      {
        sender: "person_2",
        content: {
          text: "middle message"
        }
      },
      {
        sender: "person_1",
        content: {
          text: "first message"
        }
      },
    ]
  },
  {
    id: "1",
    name: "Chat 1",
    messages: [
      {
        sender: "person_1",
        content: {
          text: "last message"
        }
      },
      {
        sender: "person_2",
        content: {
          text: "middle message"
        }
      },
      {
        sender: "person_1",
        content: {
          text: "first message"
        }
      },
    ]
  }
]
