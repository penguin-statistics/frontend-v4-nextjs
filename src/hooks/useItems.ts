import useSWR from "swr";
import {Item} from "../models/item";

// @ts-ignore
const fetcher = (...args) => fetch(...args).then(async (res) => ({ json: (await res.json()) as Item[], headers: res.headers }))

export const useItems = () => {
  return useSWR('http://localhost:8110/PenguinStats/api/v2/items?server=CN', fetcher)
}