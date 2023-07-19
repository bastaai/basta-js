export const account = `query account($accountId: String!) {
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
