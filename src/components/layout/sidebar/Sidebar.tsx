import { Component, For } from "solid-js";
import { SidebarButton } from "./button/SidebarButton";
import { setActiveChatStore, type ChatStore } from "src/utils/stores/chats";

interface SidebarProps {
  conversations: ChatStore['chats']
}

export const Sidebar: Component<SidebarProps> = (props) => {

  return (
    <aside class="bg-[#1B1B18] flex flex-col gap-y-8 w-64 p-4">
      <button>join chat</button>

      <nav class="flex flex-col gap-y-4">
        <For each={props.conversations}>
          {(item, _) => (
            <SidebarButton
              href={`conversation/${item.id}`}
              onClick={() => {
                setActiveChatStore({ activeChat: item })
              }}
            >
              {item.name}
            </SidebarButton>
          )}
        </For>
      </nav>
    </aside>
  )
}
