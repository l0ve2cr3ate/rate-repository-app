import React from "react";
import { render } from "@testing-library/react-native";
import RepositoryListContainer, {
  formatNumbers,
} from "./RepositoryListContainer";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        pageInfo: {
          totalCount: 8,
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };

      const { getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );

      const firstRepo = repositories.edges[0].node;
      const secondRepo = repositories.edges[1].node;

      const repoNames = getAllByTestId("fullname");
      const firstRepoName = repoNames[0];
      const secondRepoName = repoNames[1];
      expect(firstRepoName).toHaveTextContent(firstRepo.fullName);
      expect(secondRepoName).toHaveTextContent(secondRepo.fullName);

      const descriptions = getAllByTestId("description");
      const firstDescription = descriptions[0];
      const secondDescription = descriptions[1];
      expect(firstDescription).toHaveTextContent(firstRepo.description);
      expect(secondDescription).toHaveTextContent(secondRepo.description);

      const languages = getAllByTestId("language");
      expect(languages[0]).toHaveTextContent(firstRepo.language);
      expect(languages[1]).toHaveTextContent(secondRepo.language);

      const stargazersCounts = getAllByTestId("stargazer-count");
      expect(stargazersCounts[0]).toHaveTextContent(
        formatNumbers(firstRepo.stargazersCount)
      );
      expect(stargazersCounts[1]).toHaveTextContent(
        formatNumbers(secondRepo.stargazersCount)
      );

      const forksCounts = getAllByTestId("forks-count");
      expect(forksCounts[0]).toHaveTextContent(
        formatNumbers(firstRepo.forksCount)
      );
      expect(forksCounts[1]).toHaveTextContent(
        formatNumbers(secondRepo.forksCount)
      );

      const ratings = getAllByTestId("rating");
      expect(ratings[0]).toHaveTextContent(
        formatNumbers(firstRepo.ratingAverage)
      );
      expect(ratings[1]).toHaveTextContent(
        formatNumbers(secondRepo.ratingAverage)
      );

      const reviewCounts = getAllByTestId("review-count");
      expect(reviewCounts[0]).toHaveTextContent(
        formatNumbers(firstRepo.reviewCount)
      );
      expect(reviewCounts[1]).toHaveTextContent(
        formatNumbers(secondRepo.reviewCount)
      );
    });
  });
});
