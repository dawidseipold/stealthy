import { useParams, type Params } from "@solidjs/router";
import { Component } from "solid-js";

interface ChatRouteParams extends Params {
  id: string;
}

interface ChatRouteProps { }

export const ChatRoute: Component<ChatRouteProps> = () => {
  const params = useParams<ChatRouteParams>();

  console.log(params)

  if (params.id === undefined) {
    return (
      <div>Select a chat</div>
    )
  }

  return (
    <div>The chat is: {params.id}</div>
  )
}

