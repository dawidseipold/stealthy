import { Component } from "solid-js"
import { Message } from "src/components/ui/message/Message"

interface ConversationProps {

}

export const Conversation: Component<ConversationProps> = () => {

  return (
    <div>
      <header>
        <div>
          <strong>Your conversation</strong>
          <span>45 members, 24 online</span>
        </div>

        <nav>
          Icons with actions
        </nav>
      </header>

      <main>
        <Message text="Hi guys what is up?" sender={{ username: 'bolton12' }} />
        <Message text="Not much... What about you?" sender={{ username: 'quintine2' }} />
      </main>

      <footer>
        <form class="flex gap-4">
          <nav>
            Attachment types
          </nav>

          <input type="text" placeholder="Your message" />

          <button>Send</button>
        </form>
      </footer>
    </div>
  )
}

