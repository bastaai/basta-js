<img
src="https://gist.githubusercontent.com/viktorbasta/d60b2555b30c415c8da7f4cc91282a7e/raw/84debc03b126793c193f40010388b1855aec1ad4/basta-labs-logo-horizontal.png"
height="120" />

# Basta JS

A lightweight package for client-side apps to easily access and manage data from
Basta's online auctions, providing a seamless integration for creating engaging
auction experiences.
A React library for integrating with the Basta API, providing type-safe GraphQL clients for both the Client API and Management API.

## Installation

```bash
npm install basta-js
# or
pnpm add basta-js
# or
yarn add basta-js
```

## Features

- Type-safe GraphQL client generated with [genql](https://github.com/remorses/genql)
- React Context and Hooks for easy API access
- Support for both Client API and Management API
- Built with TypeScript
- React 16.8+ support
- All currency amounts follow the ISO 4217 standard. See [here](https://en.wikipedia.org/wiki/ISO_4217).

## Usage

### Basic Setup

Wrap your application with the `BastaProvider` and configure the relevant API/s:

```tsx
import { BastaProvider } from "basta-js";

function App() {
  return (
    <BastaProvider
      clientApi={{
        headers: {
          // Add any custom headers here, e.g.: 'Authorization': 'Bearer client-token'
        },
      }}
      // managementApi={{}}
    >
      <YourApp />
    </BastaProvider>
  );
}
```

### Using the Client API

There are two ways to access the Client API:

#### 1. Using `useBasta()` hook

Returns both `clientApi` and `managementApi` (nullable):

```tsx
import { useBasta } from "basta-js";

function SomeComponent() {
  const { clientApi } = useBasta();

  const fetchSale = async () => {
    const response = await clientApi?.query({
      sale: {
        __args: { id: "your-sale-id" },
        id: true,
        title: true,
        description: true,
      },
    });

    console.log(response?.sale);
  };

  return <div>Your component</div>;
}
```

#### 2. Using `useClientApi()` hook

Returns a non-null `Client` instance (throws if not configured):

```tsx
import { useClientApi } from "basta-js";

function SomeComponent() {
  const clientApi = useClientApi();

  const fetchSale = async () => {
    const response = await clientApi.query({
      sale: {
        __args: { id: "your-sale-id" },
        id: true,
        title: true,
        description: true,
      },
    });

    console.log(response.sale);
  };

  return <div>Your component</div>;
}
```

### Configuration Options

#### `BastaProvider` Props

```typescript
interface BastaProviderProps {
  clientApi?: {
    url?: string;
    headers?: Record<string, string>;
    wsUrl?: string;
  };
  managementApi?: {
    url?: string;
    headers?: Record<string, string>;
    wsUrl?: string;
  };
}
```

## API Reference

### Hooks

- `useBasta()`: Returns `{ clientApi: Client | null, managementApi: Client | null }`
- `useClientApi()`: Returns `Client` (non-null, throws if not configured)
- `useManagementApi()`: Returns `Client` (non-null, throws if not configured)

### Components

- `BastaProvider`: Context provider for configuring and accessing the Basta APIs

## Development

### Scripts

```bash
# Build the library
pnpm build

# Format code
pnpm format
pnpm format:fix

# Update the Client API schema
pnpm client:update

# Update the Management API schema
pnpm manage:update
```

This will prompt you to select an API version (e.g., `2022-10`, `unstable`) and regenerate the client from the latest GraphQL schema.

For the Management API you'll have to supply an Account ID and API Key, you can put them in an `.env` file and the script will pick it up for you. Otherwise you'll be prompted for it by the script.

## Requirements / Peer dependencies

- `react` 16.8.0 or higher
- `urql` 5.0.0 or higher
- `graphql-ws` 6.0.0 or higher (optional)
