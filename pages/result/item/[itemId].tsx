import {useEffect, useState} from "react";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {Item} from "models/item";
import useSWR from "swr";
import {useRouter} from "next/router";
import {ParsedUrlQuery} from "querystring";
import {useItems} from "../../../src/hooks/useItems";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return { props: { params } }
}

interface ItemDetailProps {
  params: ParsedUrlQuery | undefined
}

const ItemDetail: NextPage<ItemDetailProps> = ({ params }) => {
  const { data, error } = useItems()

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  const items = data.json as Item[]
  const item = items.find(el => el.itemId === params?.itemId)

  return (
    <div>
      <h1>{item.name}</h1>
      <h6>Backend Response Generated at: {data.headers.get('Response-Time')}</h6>
      <code><pre>{JSON.stringify(item, null, 4)}</pre></code>
    </div>
  )
}

export default ItemDetail
