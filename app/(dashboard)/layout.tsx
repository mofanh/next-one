export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>dashboard</h1>
      <div>{children}</div>
    </>
  );
}
