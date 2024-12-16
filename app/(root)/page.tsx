export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const albums = await res.json();
  return (
    <div>
      {albums.map((album: { id: number; title: string }) => {
        return (
          <div
          key={album.id}
          className="shadow-md rounded-lg p-4 transition">
            <h3 className="text-lg font-bold mb-2">{album.title}</h3>
            <p className="text-gray-600">id: {album.id}</p>
          </div>
        );
      })}
    </div>
  );
}
