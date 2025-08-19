import { baseUrl } from "@/utils/baseUrl";

export default async function DataBaseDataPage() {
  const data = await fetch(`http://localhost:3000/api/mongodb`, {
    method: "GET",
    cache: "no-store",
  });

  const items = await data.json();
  return (
    <>
      <section className="min-h-screen flex justify-center items-center bg-fuchsia-400">
        <h1>This page shows the content of our mongoDB database</h1>
        <ul>
          {items.map((item) => (
            <li key={item._id}>{item.name}</li>
          ))}
          ;
        </ul>
      </section>
    </>
  );
}
