import { Sidebar } from "src/components/layout/sidebar/Sidebar"
import { conversationsStore } from "src/utils/stores/conversations"
import { Component } from "solid-js"
import { Conversation } from "src/components/layout/conversation/Conversation"

interface MainViewProps {
}

export const Home: Component<MainViewProps> = () => {
  const conversations = () => conversationsStore.conversations;

  return (
    <div class="flex h-dvh w-full">
      <Sidebar conversations={conversations()} />

      <main>
        <Conversation />
      </main>
    </div>
  )
}

