import { Sidebar } from "src/components/ui/sidebar/Sidebar"
import { conversationsStore } from "src/utils/stores/conversations"
import { Component } from "solid-js"

interface MainViewProps {
}

export const Home: Component<MainViewProps> = () => {
  return (
    <div class="flex h-dvh w-full">
      <Sidebar conversations={conversationsStore.conversations} />

      <main>
        s
      </main>
    </div>
  )
}

