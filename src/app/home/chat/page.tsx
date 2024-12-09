"use client";

import { useState } from "react";
import Message from "./components/Message";
import { useChatStore } from "../../../../store";
import { iflytek } from "@/client/platforms/iflytek";

import styles from "./index.module.scss";

export default function Chat() {
  const { messages, add } = useChatStore();
  const [inputValue, setInputValue] = useState("");
  const onSubmit = (event) => {
    if (event.key === "Enter" && event.keyCode === 13 && event.shiftKey) {
      // shift + enter 无操作
    } else if (event.key === "Enter" && !event.shift) {
      // console.log("你按下了回车键，执行相关操作--", event.currentTarget.value);
      event.preventDefault()
      add({
        context: inputValue,
        sender: "user",
        status: "pass",
      });
      iflytek(inputValue);
      setInputValue("");
    }
  };
  return (
    <div className={styles["chat-container"]}>
      <div className={styles["chat-message"]}>
        {messages.map((message, index) => (
          <Message
            key={index}
            position={message.sender === "user" ? "right" : "left"}
            content={message.context}
            status={message.status}
            time={"timer"}
          />
        ))}
      </div>
      <div className={styles["chat-input-container"]}>
        <textarea
          id="chat-input"
          value={inputValue}
          className={styles["chat-input"]}
          onKeyDown={onSubmit}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </div>
  );
}
