import { Component } from "solid-js"

type Attachment = {
  type: "image" | "video" | "file";
  name: string
}

interface MessageProps {
  text: string;
  attachments: Attachment[]
}

export const Message: Component<MessageProps> = (props) => {
  const text = () => props.text;


  return (
    <div>{text()}</div>
  )
}

