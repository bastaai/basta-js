import {
  createManagementApiClient,
  type managementApiSchema,
} from "@bastaai/basta-js-local";
import { notFound } from "next/navigation";

// Using omit here but you might want to use
// Pick for larger types where you only need
// a subset of the fields from a given type.
type BidderToken = Omit<managementApiSchema.BidderToken, "__typename">;

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const ttlParam = params?.ttl;
  const ttl = ttlParam ? Number(ttlParam) : 60;
  const accountId = "fill-me-in";
  const userId = "fill-me-in";

  const bidderToken = await getBidderToken(accountId, userId, ttl);

  if (!bidderToken) {
    notFound();
  }

  return (
    <main
      style={{ fontFamily: "sans-serif", textAlign: "center", padding: "2rem" }}
    >
      <h1>Server-Side Rendered Page (App Router)</h1>
      <p>{bidderToken?.token ?? "no token available"}</p>
      <p>Expires at: {bidderToken?.expiration ?? "N/A"}</p>
    </main>
  );
}

async function getBidderToken(
  accountId: string,
  userId: string,
  ttl: number,
): Promise<BidderToken | null> {
  if (!process.env.BEARER_TOKEN) return null;

  const client = createManagementApiClient({
    headers: {
      Authorization: process.env.BEARER_TOKEN,
    },
  });

  try {
    const response = await client.mutation({
      createBidderToken: {
        __args: {
          accountId,
          input: {
            metadata: {
              ttl,
              userId,
            },
          },
        },
        token: true,
        expiration: true,
      },
    });

    return response.createBidderToken;
  } catch (err) {
    console.error("Failed to create bidder token:", err);
    return null;
  }
}
