import { useQuery } from "@apollo/react-hooks";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const { data, error, loading, refetch: fetchRepositories } = useQuery(
    GET_REPOSITORIES,
    {
      fetchPolicy: "cache-and-network",
    }
  );

  const repositories = data?.repositories;

  return { repositories, error, loading, refetch: fetchRepositories };
};

export default useRepositories;
