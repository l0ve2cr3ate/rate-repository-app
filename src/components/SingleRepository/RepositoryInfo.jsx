import React from "react";
import RepositoryItem from "../RepositoryItem";
import { formatNumbers } from "../RepositoryList/RepositoryListContainer";

const RepositoryInfo = ({ repository }) => {
  return (
    <RepositoryItem
      id={repository?.id}
      fullName={repository?.fullName}
      description={repository?.description}
      language={repository?.language}
      forksCount={formatNumbers(repository?.forksCount)}
      stars={formatNumbers(repository?.stargazersCount)}
      ratingAverage={formatNumbers(repository?.ratingAverage)}
      reviewCount={formatNumbers(repository?.reviewCount)}
      avatar={repository?.ownerAvatarUrl}
      url={repository?.url}
      detailView
    />
  );
};

export default RepositoryInfo;
