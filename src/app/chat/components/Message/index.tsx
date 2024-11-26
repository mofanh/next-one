import MarkdownIt from "markdown-it";
import { useMemo, useRef } from "react";
import ChatAvatar from "../ChatAvatar";
import { Spin } from "antd";

import styles from "./index.module.css";

import myLogo from "../../../fonts/logo-my.jpg";

interface MessageProps {
  position: "left" | "right";
  content: string;
  status: "pass" | "loading" | "error" | string;
  time: string;
  model?: string;
  onDelChatMessage?: () => void;
  onRefurbishChatMessage?: () => void;
  // pluginInfo?: PluginInfo
}

function Message(props: MessageProps) {
  const { position, content, status, time, model } = props;
  const mdi = new MarkdownIt({
    html: true,
    linkify: true,
    // highlight(code, language) {
    //   const validLang = !!(language && hljs.getLanguage(language))
    //   if (validLang) {
    //     const lang = language ?? ''
    //     return highlightBlock(hljs.highlight(code, { language: lang }).value, lang, code)
    //   }
    //   return highlightBlock(hljs.highlightAuto(code).value, '', code)
    // }
  });
  const markdownBodyRef = useRef<HTMLDivElement>(null);
  const renderText = useMemo(() => {
    const value = content || "";
    if (position === "right") {
      return <div ref={markdownBodyRef}>{value}</div>;
    }
    const renderMdHtml = mdi.render(value);
    return (
      <div
        ref={markdownBodyRef}
        dangerouslySetInnerHTML={{
          __html: renderMdHtml,
        }}
      />
    );
  }, [content, position]);

  return (
    <div className={styles.messageContainer}>
      <ChatAvatar
        isShow={position === "left"}
        icon={myLogo.src}
        style={{ marginRight: 8 }}
      />
      <div>
        {/* 创建时间⌚️ */}
        <span
          style={{
            width: "100%",
            textAlign: position === "right" ? "right" : "left",
          }}
        >
          {time}
        </span>
        {/* {pluginInfo && <PluginCard {...pluginInfo} />} */}
        <div>{status === "loading" ? <Spin /> : renderText}</div>
      </div>
      <ChatAvatar
        isShow={position === "right"}
        icon={"userImg"}
        style={{ marginLeft: 8 }}
      />
    </div>
  );
}

export default Message;
