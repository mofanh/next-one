export default function ChatLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section style={{width: '100%', height: '100%'}}>
      {children}
    </section>
  );
}
