export default function Page({ params } : {params: { id: string}}) {
  const { id } = params;
    return (<h1 className="text-3xl">User details id : {id}</h1>);
  }
  