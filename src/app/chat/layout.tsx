export default function ChatLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section style={{width: '100%'}}>
      <nav>123</nav>

      {children}
    </section>
  );
}
