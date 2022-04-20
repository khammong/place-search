import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Body from './components/Body/index'
import Footer from './components/Footer/index'
import TopBar from './components/TopBar/index'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Place Search</title>
        <meta name="description" content="Place Search" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <Body />
      <Footer />
    </div>
  )
}
