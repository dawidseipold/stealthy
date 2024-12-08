import { createSignal, For } from "solid-js";
import { SidebarButton } from "./button/SidebarButton";

export function Sidebar() {
  const [chats, _] = createSignal(["Chat 1", "Chat 2", "Chat 3"]);

  return (
    <aside class="bg-[#1B1B18] flex flex-col gap-y-8 w-64 p-4">
      <SidebarButton>join chat</SidebarButton>

      <nav class="flex flex-col gap-y-4">
        <For each={chats()}>
          {(item, _) => (
            <SidebarButton>
              {item}
            </SidebarButton>
          )}
        </For>
      </nav>
    </aside>
  )
}
