import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://client.api.basta.ai/graphql',
  generates: {
    // Generate types for schema and operations
    './src/gql/generated/types.ts': {
      overwrite: true,
      documents: 'gql/**/*.graphql',
      plugins: ['typescript', 'typescript-operations'],
      hooks: { afterOneFileWrite: ['prettier --write'] },
    },
    // Generate raw operations to strings
    './src/gql/generated/operations.ts': {
      overwrite: true,
      documents: 'gql/**/*.graphql',
      plugins: ['codegen-operations-plugin.js'],
      hooks: { afterOneFileWrite: ['prettier --write'] },
    },
  },
};

export default config;
