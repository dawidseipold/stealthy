import { Component, For } from "solid-js";
import { SidebarButton } from "./button/SidebarButton";
import { ConversationsStore } from "src/utils/stores/conversations";

interface SidebarProps {
  conversations: ConversationsStore['conversations']
}

export const Sidebar: Component<SidebarProps> = (props) => {

  return (
    <aside class="bg-[#1B1B18] flex flex-col gap-y-8 w-64 p-4">
      <SidebarButton>join chat</SidebarButton>

      <nav class="flex flex-col gap-y-4">
        <For each={props.conversations}>
          {(item, _) => (
            <SidebarButton>
              {item.id}
            </SidebarButton>
          )}
        </For>
      </nav>
    </aside>
  )
}
