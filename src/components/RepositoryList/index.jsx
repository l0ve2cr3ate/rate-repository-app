import React from "react";
import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
  const [sort, setSort] = React.useState();

  let data;

  switch (sort) {
    case "Latest repositories":
      data = useRepositories("CREATED_AT", "DESC");
      break;
    case "Highest rated repositories":
      data = useRepositories("RATING_AVERAGE", "DESC");
      break;
    case "Lowest rated repositories":
      data = useRepositories("RATING_AVERAGE", "ASC");
      break;
    default:
      data = useRepositories();
  }

  const repositories = data?.repositories;

  const onPress = (value) => setSort(value);

  return (
    <RepositoryListContainer
      sort={sort}
      onPress={onPress}
      repositories={repositories}
    />
  );
};

export default RepositoryList;
