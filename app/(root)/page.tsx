import SearchForm from "../components/SearchForm";

export default async function Home({
  searchParams,
}: Promise<{ query: string }>) {
  const query = (await searchParams).query;
  return (
    <main>
      <section className="pink_container">
        <h1 className="heading">Next one</h1>
        <p className="sub-heading">submit idea</p>
        <SearchForm query={query} />
      </section>
    </main>
  );
}
