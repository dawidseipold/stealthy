import { A } from "@solidjs/router";
import { Component, For, Match, Resource, Show, Switch } from "solid-js"
import ChatPreview from "src/components/ui/chat-preview/ChatPreview";
import { Chat, setActiveChatStore } from "src/utils/stores/chats"

interface ChatsSidebarProps {
  chats: Resource<Chat[]>
}

const ChatsSidebar: Component<ChatsSidebarProps> = (props) => {
  const chats = props.chats;

  return (
    <div class="flex flex-col gap-y-4 w-64 bg-blue-50 h-dvh p-4">
      <Show when={chats.loading}>
        loading...
      </Show>

      <Switch>
        <Match when={chats()}>
          <nav class="flex flex-col gap-y-2">
            <For each={chats()}>
              {(chat) => (
                <A href={`/chats/${chat.id}`} onClick={() => setActiveChatStore({ activeChat: chat })}>
                  <ChatPreview chat={chat} />
                </A>
              )}
            </For>
          </nav>
        </Match>
      </Switch>
    </div>
  )
}

export default ChatsSidebar
