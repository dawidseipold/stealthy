import { Sidebar } from "src/components/ui/sidebar/Sidebar"
import { conversationsStore } from "src/utils/stores/conversations"
import { Component } from "solid-js"
import { Conversation } from "src/components/layout/conversation/Conversation"

interface MainViewProps {
}

export const Home: Component<MainViewProps> = () => {
  return (
    <div class="flex h-dvh w-full">
      <Sidebar conversations={conversationsStore.conversations} />

      <main>
        <Conversation />
      </main>
    </div>
  )
}

