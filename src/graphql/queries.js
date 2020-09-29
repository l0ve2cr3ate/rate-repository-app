import { gql } from "apollo-boost";
import { PAGE_INFO, REPOSITORY_INFO, REVIEW_INFO } from "./fragments";

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
        ...PageInfoData
      }
    }
  }
  ${REPOSITORY_INFO}
  ${PAGE_INFO}
`;

export const GET_REPOSITORY = gql`
  query Repository($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      url
      ...RepositoryInfo
      reviews(first: $first, after: $after) {
        edges {
          node {
            ...ReviewInfo
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          ...PageInfoData
        }
      }
    }
  }
  ${REPOSITORY_INFO}
  ${PAGE_INFO}
  ${REVIEW_INFO}
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
          ...PageInfoData
        }
        edges {
          cursor
          node {
            ...ReviewInfo
            repository {
              id
              fullName
            }
          }
        }
      }
    }
  }
  ${PAGE_INFO}
  ${REVIEW_INFO}
`;
