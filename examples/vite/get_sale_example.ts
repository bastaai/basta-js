import { createClientApiClient } from "@bastaai/basta-js";

const client = createClientApiClient({
  headers: {
    // Add your authentication headers here
    // 'Authorization': 'Bearer your-token'
  },
});

async function getSaleExample() {
  try {
    const result = await client.query({
      sale: {
        __args: {
          id: "193286e925-742813000003000b",
        },
        id: true,
        title: true,
      },
    });

    console.log("Sale data:", result.sale);
  } catch (error) {
    console.error("Error fetching sale:", error);
  }
}

getSaleExample();
