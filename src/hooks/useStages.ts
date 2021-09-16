import useSWR from "swr";
import {Stage} from "models/stage";
import {fetcher} from "utils/fetcher";
import {endpointUrl} from "utils/env";

export const useStages = () => {
  return useSWR(endpointUrl('/api/v2/stages?server=CN'), (url: string) => fetcher<Stage>(url))
}
