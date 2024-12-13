import { createResource, ParentComponent } from "solid-js"
import ChatsSidebar from "src/components/layout/chats-sidebar/ChatsSidebar"
import { CHATS } from "src/utils/constants/chats"
import { Chat } from "src/utils/stores/chats"

const fetchChats = async () => {
  return new Promise<Chat[]>((resolve) => {
    setTimeout(() => {
      resolve(CHATS)
    }, 1000)
  })
}

export const ChatsLayout: ParentComponent = (props) => {
  const [chats] = createResource<Chat[]>(fetchChats);


  return (
    <div class="flex">
      <ChatsSidebar chats={chats} />

      {props.children}
    </div>
  )
}

