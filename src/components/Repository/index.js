import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { useParams } from "react-router-native";
import { GET_REPOSITORY } from "../../graphql/queries";
import RepositoryItem from "../RepositoryList/RepositoryItem";
import { formatNumbers } from "../RepositoryList/RepositoryListContainer";

const Repository = () => {
  const { id } = useParams();

  const { loading, data } = useQuery(GET_REPOSITORY, {
    variables: { id },
  });

  if (loading) return null;

  return (
    <RepositoryItem
      id={id}
      fullName={data?.repository.fullName}
      description={data?.repository.description}
      language={data?.repository.language}
      forksCount={formatNumbers(data?.repository.forksCount)}
      stars={formatNumbers(data?.repository.stargazersCount)}
      ratingAverage={formatNumbers(data?.repository.ratingAverage)}
      reviewCount={formatNumbers(data?.repository.reviewCount)}
      avatar={data?.repository.ownerAvatarUrl}
      url={data?.repository.url}
      detailView
    />
  );
};

export default Repository;
