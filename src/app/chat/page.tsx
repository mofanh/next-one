"use client";

import Message from "./components/Message";
import { useChatStore } from "../../../store";
import { fetchXfSpark } from "@/client/platforms/XfSpark";
import { xf } from "@/client/platforms/xf";
import { iflytek } from "@/client/platforms/iflytek";

export default function Chat() {
  const { messages, add, onUserInput } = useChatStore();

  return (
    <div>
      {messages.map((message, index) => (
        <Message
          key={index}
          position={message.sender === "user" ? "right" : "left"}
          content={message.context}
          status={message.status}
          time={"1"}
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
          iflytek('你是谁')
          // xf('你好')
          // onUserInput()
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
    </div>
  );
}
