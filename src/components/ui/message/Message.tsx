import { Component } from "solid-js"
import { cn } from 'src/utils/helpers/cn'
import { User, userStore } from "src/utils/stores/user";


type Attachment = {
  type: "image" | "video" | "file";
  name: string
}

interface MessageProps {
  text: string;
  sender: User;
  attachments?: Attachment[]
}

export const Message: Component<MessageProps> = (props) => {
  const username = userStore.username;
  const text = () => props.text;

  const isSender = username === props.sender.username;

  return (
    <div class={cn("p-2 rounded-2xl font-medium text-white", isSender ? "bg-blue-400" : "bg-slate-400")}>{text()}</div>
  )
}

