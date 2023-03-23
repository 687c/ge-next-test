import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by going to &nbsp;
          <Link href="/anime">
            <code className={styles.code}>localhost/anime</code>
          </Link>
        </p>
      </div>
    </main>
  )
}


//  query to fetch the data 