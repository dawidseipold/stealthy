import { useParams, type Params } from "@solidjs/router";
import { Component, createEffect, createResource, createSignal, Match, Switch } from "solid-js";
import { CHATS } from "src/utils/constants/chats";
import { Chat } from "src/components/layout/chat/Chat";
import { type Chat as ChatType } from 'src/utils/stores/chats'

interface ChatRouteParams extends Params {
  id: string;
}

interface ChatRouteProps { }

const fetchChat = async (id: ChatType['id']) => {
  return new Promise<ChatType>((resolve) => {
    setTimeout(() => {
      resolve(CHATS.filter(chat => chat.id === id)[0])
    }, 1000)
  })
}

export const ChatRoute: Component<ChatRouteProps> = () => {
  const params = useParams<ChatRouteParams>();
  const [chatId, setChatId] = createSignal(params.id);
  const [chat, { refetch }] = createResource(chatId, fetchChat);

  createEffect(() => {
    setChatId(params.id);
    refetch()
  });

  return (
    <Switch>
      <Match when={chatId() === undefined}>
        Select a chat
      </Match>

      <Match when={chatId() !== undefined}>
        <Switch>
          <Match when={chat.loading}>
            Loading...
          </Match>

          <Match when={chat.error}>
            Error fetching a chat
          </Match>

          <Match when={chat()}>
            <Chat chat={chat()!} />
          </Match>
        </Switch>
      </Match>
    </Switch>
  )
}

