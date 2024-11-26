"use client";

import Message from "./components/Message";
import { useChatStore } from "../../../store";

export default function Chat() {
  const { messages, add } = useChatStore();

  return (
    <div>
      {messages.map((message) => (
        <Message
          position={message.sender ==='user'? "right" : "left" }
          content={message.context}
          status={message.status}
          time={"1"}
        />
      ))}
      <button
        onClick={() =>
          add({
            context: "user",
            sender: "user",
            status: "pass",
          })
        }
      >
        Click me user
      </button>
      <button
        onClick={() =>
          add({
            context: "assistent",
            sender: "assistent",
            status: "pass",
          })
        }
      >
        Click me assistent
      </button>
    </div>
  );
}
