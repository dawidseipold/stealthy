import { createResource, ParentComponent } from "solid-js"
import ChatsSidebar from "src/components/layout/chats-sidebar/ChatsSidebar"
import { CHATS_PREVIEWS } from "src/utils/constants/chats"
import { ChatPreview } from "src/utils/stores/chats"

const fetchChatsPreviews = async () => {
  return new Promise<ChatPreview[]>((resolve) => {
    setTimeout(() => {
      resolve(CHATS_PREVIEWS)
    }, 1000)
  })
}

export const ChatsLayout: ParentComponent = (props) => {
  const [chatsPreviews] = createResource<ChatPreview[]>(fetchChatsPreviews);

  return (
    <div class="flex">
      <ChatsSidebar chats={chatsPreviews} />

      {props.children}
    </div>
  )
}

