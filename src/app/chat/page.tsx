"use client";

import Message from "./components/Message";
import { useChatStore } from "../../../store";
import { iflytek } from "@/client/platforms/iflytek";

import styles from "./index.module.scss";

export default function Chat() {
  const { messages, add } = useChatStore();
  return (
    <div>
      {messages.map((message, index) => (
        <Message
          key={index}
          position={message.sender === "user" ? "right" : "left"}
          content={message.context}
          status={message.status}
          time={"timer"}
        />
      ))}
      <button
        onClick={(event) => {
          add({
            context: "user",
            sender: "user",
            status: "pass",
          });
          event.preventDefault();
          iflytek("你好");
        }}
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
      <textarea id="chat-input" className={styles["chat-input"]} />
    </div>
  );
}
