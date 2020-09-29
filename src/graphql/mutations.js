import { gql } from "apollo-boost";
import { REVIEW_INFO } from "./fragments";

export const SIGN_IN = gql`
  mutation authorizeMutation($credentials: AuthorizeInput!) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;

export const SIGN_UP = gql`
  mutation CreateUser($user: CreateUserInput!) {
    createUser(user: $user) {
      id
      username
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation CreateReview($review: CreateReviewInput!) {
    createReview(review: $review) {
      user {
        username
      }
      repositoryId
      ...ReviewInfo
    }
  }
  ${REVIEW_INFO}
`;

export const DELETE_REVIEW = gql`
  mutation DeleteRevies($id: ID!) {
    deleteReview(id: $id)
  }
`;
