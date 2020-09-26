import React, { useEffect } from "react";
import { useDebounce } from "use-debounce";
import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
  const [sort, setSort] = React.useState();
  const [variables, setVariables] = React.useState();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);

  const { repositories, fetchMore } = useRepositories({
    first: 20,
    ...variables,
  });

  const onChangeSearch = (query) => setSearchQuery(query);
  const onPress = (variables, sortBy) => {
    setSort(sortBy);
    setVariables(variables);
  };
  const onEndReach = () => {
    fetchMore();
  };

  useEffect(() => {
    setVariables({ searchKeyword: debouncedSearchQuery });
  }, [debouncedSearchQuery]);

  return (
    <RepositoryListContainer
      sort={sort}
      onPress={onPress}
      repositories={repositories}
      searchQuery={searchQuery}
      onChangeSearch={onChangeSearch}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
