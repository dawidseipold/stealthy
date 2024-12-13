import { For, type Component } from "solid-js"
import { Message } from "src/components/ui/message/Message"
import { type Chat as ChatType } from "src/utils/stores/chats"

interface ChatProps {
  chat: ChatType
}

export const Chat: Component<ChatProps> = (props) => {
  const chat = () => props.chat;

  return (
    <div>
      <For each={chat()?.messages}>
        {(message) => (
          <Message message={message}>
          </Message>
        )}
      </For>

    </div>
  )
}

export default Chat
