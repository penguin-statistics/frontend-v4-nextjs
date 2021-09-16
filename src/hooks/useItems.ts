import useSWR from "swr";
import {Item} from "models/item";
import {fetcher} from "utils/fetcher";
import {endpointUrl} from "utils/env";

export const useItems = () => {
  return useSWR(endpointUrl('/api/v2/items?server=CN'), (url: string) => fetcher<Item>(url))
}
