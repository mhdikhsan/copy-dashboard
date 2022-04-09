import { lightFormat } from "date-fns";
import useSWR from "swr";
import { directusUrl } from "../static";
import { useAuth } from "./useAuth";
import { useGraphFilter } from "./useGraphFilter";

const fetcher = (query) =>
  fetch(query)
    .then((res) => res.json())
    .then((res) => res.data);

export function useGraphData() {
  const fromDate = useGraphFilter((state) => state.fromDate);
  const toDate = useGraphFilter((state) => state.toDate);
  const reporterId = useGraphFilter((state) => state.reporterId);
  const token = useAuth((state) => state.token);
  const { data, error } = useSWR(
    directusUrl +
      `/items/accident?` +
      `filter[created_at][_between]=[${lightFormat(
        fromDate,
        "yyyy-MM-dd hh:mm"
      )},${lightFormat(toDate, "yyyy-MM-dd 23:59")}]` +
      (reporterId ? `&filter[reporter.id][_eq]=${reporterId}` : "") +
      `&aggregate[count]=unique_id&groupBy[]=day(created_at)&groupBy[]=month(created_at)&groupBy[]=year(created_at)` +
      `&access_token=${token}`,
    fetcher
  );
  return {
    items: data,
    isLoading: !error && !data,
    isError: error,
  };
}
