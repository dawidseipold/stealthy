import { Component } from "solid-js"
import { type ChatPreview } from "src/utils/stores/chats"

interface ChatPreviewProps {
  chat: ChatPreview
}

const ChatPreview: Component<ChatPreviewProps> = (props) => {
  const chat = () => props.chat;

  return (
    <div class="w-full flex gap-x-4 items-center">
      <img src="src/assets/default-chat.png" class="w-12 h-12 aspect-square rounded-2xl" />

      <div class="flex flex-col gap-y-1 flex-1 min-w-0">
        <strong class="truncate">
          {chat().name}
        </strong>

        <span class="truncate text-slate-500">
          {chat().lastMessage.content.text}
        </span>
      </div>
    </div>
  )
}

export default ChatPreview
