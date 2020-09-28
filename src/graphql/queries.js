import { gql } from "apollo-boost";
import { REPOSITORY_INFO } from "./fragments";

export const GET_REPOSITORIES = gql`
  query Repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      edges {
        node {
          ...RepositoryInfo
        }
        cursor
      }
      pageInfo {
        hasNextPage
        totalCount
        startCursor
        endCursor
      }
    }
  }
  ${REPOSITORY_INFO}
`;

export const GET_REPOSITORY = gql`
  query Repository($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      url
      ...RepositoryInfo
      reviews(first: $first, after: $after) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          hasNextPage
          totalCount
          startCursor
          endCursor
        }
      }
    }
  }
  ${REPOSITORY_INFO}
`;

export const GET_AUTHORIZED_USER = gql`
  query AuthorizedUser(
    $first: Int
    $after: String
    $includeReviews: Boolean = false
  ) {
    authorizedUser {
      id
      username
      reviews(first: $first, after: $after) @include(if: $includeReviews) {
        pageInfo {
          hasNextPage
          totalCount
          startCursor
          endCursor
        }
        edges {
          cursor
          node {
            id
            rating
            createdAt
            text
            repository {
              fullName
            }
          }
        }
      }
    }
  }
`;
