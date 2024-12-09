import { Avatar } from "antd";

function ChatAvatar({
  icon,
  style,
}: {
  icon: string;
  style?: React.CSSProperties;
}) {
  console.log(icon);
  return (
    <div
      style={{
        ...style,
      }}
    >
      <Avatar src={<img src={icon} alt="" />} />
    </div>
  );
}

export default ChatAvatar;
