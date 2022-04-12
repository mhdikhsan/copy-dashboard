import useSWR from "swr";
import { directusUrl } from "../static";
import { useAuth } from "./useAuth";

const fetcher = (query) =>
  fetch(query)
    .then((res) => res.json())
    .then((res) => res.data);

export function useUsers() {
  const token = useAuth((state) => state.token);
  const { data, error } = useSWR(
    directusUrl + "/users" + `?access_token=${token}`,
    fetcher
  );

  return {
    items: data,
    isLoading: !error && !data,
    isError: error,
  };
}
