export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>root</h1>
      <div>{children}</div>
    </>
  );
}
