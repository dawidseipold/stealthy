import { Component } from "solid-js"
import { cn } from 'src/utils/helpers/cn'
import { type Message as MessageType } from "src/utils/stores/conversations";
import { userStore } from "src/utils/stores/user";




interface MessageProps {
  message: MessageType
}

export const Message: Component<MessageProps> = (props) => {
  const username = () => userStore.username;

  const isSender = username() === props.message.sender;

  return (
    <div class={cn("p-2 rounded-2xl font-medium text-white", isSender ? "bg-blue-400" : "bg-slate-400")}>{props.message.content.text}</div>
  )
}

