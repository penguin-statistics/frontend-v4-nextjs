import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {ParsedUrlQuery} from "querystring";
import {useStages} from "hooks/useStages";
import {Stage} from "models/stage";

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

  const stages = data.json as Stage[]
  const stage = stages.find(el => el.stageId === params?.stageId)

  if (!stage) throw new Error("Stage not found with stageId `" + params?.stageId + "`. Expected to be one of the following: " + stages.map(el => el.stageId).join(', '))

  return (
    <div>
      <h1>
        {stage.code}

        <small style={{
          background: "rgba(0, 0, 0, .05",
          borderRadius: "10rem",
          fontSize: "14px",
          padding: ".25rem .75rem",
          marginLeft: '1rem'
        }}>
          stage <code>{stage.stageId}</code>
        </small>

        <small style={{
          background: "rgba(0, 0, 0, .05",
          borderRadius: "10rem",
          fontSize: "14px",
          padding: ".25rem .75rem",
          marginLeft: '.5rem'
        }}>
          zone <code>{stage.zoneId}</code>
        </small>
      </h1>
      <h6>Backend Response Generated at: {data.headers.get('Response-Time')}</h6>
      <code><pre>{JSON.stringify(stage, null, 4)}</pre></code>
    </div>
  )
}

export default StageDetail
