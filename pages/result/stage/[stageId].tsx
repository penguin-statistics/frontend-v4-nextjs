import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {Item} from "models/item";
import useSWR from "swr";
import {useRouter} from "next/router";
import {ParsedUrlQuery} from "querystring";
import {useItems} from "../../../src/hooks/useItems";
import {useStages} from "../../../src/hooks/useStages";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return { props: { params } }
}

interface StageDetailProps {
  params: ParsedUrlQuery | undefined
}

const StageDetail: NextPage<StageDetailProps> = ({ params }) => {
  const { data, error } = useStages()

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  const items = data.json as Item[]
  const item = items.find(el => el.stageId === params?.stageId)

  return (
    <div>
      <h1>
        {item.code}

        <small style={{
          background: "rgba(0, 0, 0, .05",
          borderRadius: "10rem",
          fontSize: "14px",
          padding: ".25rem .75rem",
          marginLeft: '1rem'
        }}>
          stage <code>{item.stageId}</code>
        </small>

        <small style={{
          background: "rgba(0, 0, 0, .05",
          borderRadius: "10rem",
          fontSize: "14px",
          padding: ".25rem .75rem",
          marginLeft: '.5rem'
        }}>
          zone <code>{item.zoneId}</code>
        </small>
      </h1>
      <h6>Backend Response Generated at: {data.headers.get('Response-Time')}</h6>
      <code><pre>{JSON.stringify(item, null, 4)}</pre></code>
    </div>
  )
}

export default StageDetail
