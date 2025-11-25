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
  if (!process.env.USER_ID) {
    console.error("Missing env variables: USER_ID");
    return notFound();
  }
  const userId = process.env.USER_ID;

  const bidderToken = await getBidderToken(userId, ttl);

  if (!bidderToken) {
    notFound();
  }

  return (
    <main
      style={{ fontFamily: "sans-serif", textAlign: "center", padding: "2rem" }}
    >
      <h1>Server-Side Rendered Page (App Router)</h1>
      <p>Bidder token: {`${bidderToken.token.substring(0, 15)}...`}</p>
      <p>Expires at: {bidderToken?.expiration ?? "N/A"}</p>
    </main>
  );
}

async function getBidderToken(
  userId: string,
  ttl: number,
): Promise<BidderToken | null> {
  console.log("env: ", process.env.ACCOUNT_ID, process.env.API_KEY);
  if (!process.env.ACCOUNT_ID || !process.env.API_KEY) {
    console.error("Missing env variables: ACCOUNT_ID | API_KEY");
    return null;
  }

  const client = createManagementApiClient({
    headers: {
      "x-account-id": process.env.ACCOUNT_ID,
      "x-api-key": process.env.API_KEY,
    },
  });

  try {
    const response = await client.mutation({
      createBidderToken: {
        __args: {
          accountId: process.env.ACCOUNT_ID,
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
