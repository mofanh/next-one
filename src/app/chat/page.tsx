"use client";

import { useState } from "react";
import Message from "./components/Message";

export default function Chat() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Message position={"left"} content={"hello"} status={"pass"} time={"1"} />
    </div>
  );
}
