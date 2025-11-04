import { BastaProvider, useClientApi } from "@bastaai/basta-js";

import "./App.css";

const QueryComponent = () => {
  const clientApi = useClientApi();
  const [{ data, fetching }] = clientApi.useQuery({
    query: clientApi.query({
      sale: {
        __args: { id: "193286e925-742813000003000b" },
        id: true,
        title: true,
      },
    }),
  });

  return <>{fetching ? "loading" : data?.sale.title}</>;
};

const SubscriptionComponent = () => {
  const clientApi = useClientApi();

  const [{ data }] = clientApi.useSubscription({
    query: clientApi.subscription({
      serverTimeChanged: {
        currentTime: true,
      },
    }),
  });

  return (
    <div>
      <h3>Server Time (Live Subscription):</h3>
      <p>{data?.serverTimeChanged.currentTime || "Connecting..."}</p>
    </div>
  );
};

function App() {
  return (
    <BastaProvider
      clientApi={{
        url: "/api/graphql",
        wsUrl: "wss://client.api.basta.app/graphql",
        headers: {},
      }}
    >
      <QueryComponent />
      <SubscriptionComponent />
    </BastaProvider>
  );
}

export default App;
