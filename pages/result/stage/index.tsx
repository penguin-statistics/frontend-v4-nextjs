import {NextPage} from "next";
import {useRouter} from "next/router";
import styles from '../../../styles/Home.module.css'
import {useStages} from "hooks/useStages";

interface StageIndexProps {}

const StageIndex: NextPage<StageIndexProps> = () => {
  const router = useRouter()

  const { data, error } = useStages()

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <>
      <h1>
        Stages
      </h1>
      <ul className={styles['list']}>
        {
          data.json.map(el => (
            <li className={styles['list-item']} key={el.stageId}>
              <a className={styles['btn']} style={{
                margin: '.5rem'
              }} href={'stage/' + el.stageId} onClick={evt => {
                evt.preventDefault()
                router.push('stage/' + el.stageId)
              }}>
                {el.code} ({el.stageId})
              </a>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default StageIndex
