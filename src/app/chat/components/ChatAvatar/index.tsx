import { Avatar } from "antd";

function ChatAvatar({
  isShow,
  icon,
  style,
}: {
  isShow: boolean;
  icon: string;
  style?: React.CSSProperties;
}) {
  if (!isShow) return null;
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
