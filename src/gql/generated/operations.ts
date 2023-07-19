export const GET_ACCOUNT_BY_ID = `query GET_ACCOUNT_BY_ID($accountId: String!) {
  account(id: $accountId) {
    id
    name
    handle
    description
    imageUrl
    links {
      type
      url
      __typename
    }
    __typename
  }
}`;
