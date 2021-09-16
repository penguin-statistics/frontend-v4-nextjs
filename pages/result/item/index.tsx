import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {useRouter} from "next/router";
import styles from '../../../styles/Home.module.css'
import {useItems} from "../../../src/hooks/useItems";

interface ItemIndexProps {}

const ItemIndex: NextPage<ItemIndexProps> = () => {
  const router = useRouter()

  const { data, error } = useItems()

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <>
      <h1>
        Items
      </h1>
      <ul className={styles['list']}>
        {
          data.json.map(el => (
            <li className={styles['list-item']} key={el.itemId}>
              <a className={styles['btn']} style={{
                margin: '.5rem'
              }} href={'item/' + el.itemId} onClick={evt => {
                evt.preventDefault()
                router.push('item/' + el.itemId)
              }}>
                {el.name} ({el.itemId})
              </a>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default ItemIndex
