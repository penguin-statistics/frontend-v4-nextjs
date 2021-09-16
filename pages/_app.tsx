import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useRouter} from "next/router";
import styles from '../styles/Home.module.css'
import { SWRConfig } from "swr";

function PenguinApp({ Component, pageProps }: AppProps) {
  const { push } = useRouter()

  const routes = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'By Item',
      path: '/result/item'
    },
    {
      name: 'By Stage',
      path: '/result/stage'
    }
  ]

  return (
    <>
      <SWRConfig
        value={{
          dedupingInterval: 1000 * 10,
          errorRetryCount: 3,
          loadingTimeout: 10000
        }}
      />

      <nav style={{
        margin: '0 2rem',
        borderBottom: 'thin solid rgba(0, 0, 0, .08)'
      }}>
        <ul className={styles['list']}>
          {
            routes.map(el => (
              <li className={styles['list-item']} key={el.path}>
                <a className={styles['btn']} href={el.path} onClick={e => {
                  e.preventDefault()
                  push(el.path)
                }}>
                  {el.name}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>

      <main style={{
        margin: '4rem'
      }}>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default PenguinApp
