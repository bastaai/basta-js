import {
  type clientApiSchema,
  createClientApiClient,
} from "@bastaai/basta-js-local";
import { notFound } from "next/navigation";

export default async function Page() {
  const auction = await getAuction();

  if (!auction) {
    notFound();
  }

  return (
    <main
      style={{ fontFamily: "sans-serif", textAlign: "center", padding: "2rem" }}
    >
      <h1>Server-Side Rendered Page (App Router)</h1>
      <p>{`Auction ID: ${auction.id}`}</p>
      <p>{auction.title}</p>
    </main>
  );
}

// Using pick here but you can also manually
// define the type if you'd prefer.
type Auction = Pick<clientApiSchema.Sale, "__typename" | "id" | "title">;

async function getAuction(): Promise<Auction | null> {
  const client = createClientApiClient({});

  try {
    const response = await client.query({
      sale: {
        __args: { id: "193286e925-742813000003000b" },
        __typename: true,
        id: true,
        title: true,
      },
    });

    return response.sale;
  } catch (err) {
    console.error("Failed to fetch auction:", err);
    return null;
  }
}
