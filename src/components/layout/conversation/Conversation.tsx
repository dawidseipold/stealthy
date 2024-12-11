import { Component, For } from "solid-js"
import { Message } from "src/components/ui/message/Message"
import { activeConversationStore } from "src/utils/stores/conversations"

interface ConversationProps {

}

export const Conversation: Component<ConversationProps> = () => {
  const activeConversation = () => activeConversationStore.activeConversation;

  if (activeConversation === null) {
    return (
      <div>Join a conversation first</div>
    )
  }

  return (
    <div>
      <header>
        <div>
          <strong>{activeConversation()?.name}</strong>
          <span>45 members, 24 online</span>
        </div>

        <nav>
          Icons with actions
        </nav>
      </header>

      <main>
        <For each={activeConversation()?.messages}>
          {(message, _) => (
            <Message message={message} />
          )}
        </For>
      </main>

      <footer>
        <form class="flex gap-4">
          <nav>
            Attachment types
          </nav>

          <input type="text" placeholder="Your message" />

          <button>Send</button>
        </form>
      </footer>
    </div>
  )
}

