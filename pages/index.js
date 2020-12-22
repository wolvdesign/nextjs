import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SÍTIO IDE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <a
          <img src="/sitioide.svg" alt="Sítio ide" className={styles.logo} />
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>

        <p className={styles.description}>
          Camping . Casamentos . Pesca{' '}
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Camping &rarr;</h3>
            <p>Quer acampar no campo? Click e conheça!.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Casamentos &rarr;</h3>
            <p>Um espaço para casamentos pensado nos mínimos detalhes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Pesca &rarr;</h3>
            <p>Torneios e Pesca esportiva o ano inteiro.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Reservas &rarr;</h3>
            <p>
              Preencha seus dados e entramos em contato logo em seguida.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://instagram.com/glaaaauber"
          target="_blank"
          rel="noopener noreferrer"
        >
          Criado Por{' '}
          <img src="/wolves.svg" alt="Wolves Media" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
