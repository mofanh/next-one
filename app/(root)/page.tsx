import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const { query } = await searchParams;
  return (
    <main>
      <section className="pink_container">
        <h1 className="heading">Next one</h1>
        <p className="sub-heading">submit idea</p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Results for "${query}"` : "All startups"}
        </p>
        <ul>
          <StartupCard />
        </ul>
      </section>
    </main>
  );
}
