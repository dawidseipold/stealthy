import { A } from "@solidjs/router"
import { MessageCircle } from "lucide-solid"

export const PrimarySidebar = () => {
  return (
    <aside class="h-dvh w-24 bg-red-50 flex flex-col gap-y-4 items-center p-2">
      <A href="/">logo</A>

      <nav class="flex flex-col gap-y-2">
        <A href="/chats" class="flex flex-col gap-1 items-center">
          <MessageCircle />
          <span>All chats</span>
        </A>
      </nav>
    </aside>
  )
}
