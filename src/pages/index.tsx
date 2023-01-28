import Head from 'next/head'
import { Montserrat } from '@next/font/google'
import { Header } from '@/components/Header'
import { Grid } from '@/components/Grid'
import { Footer } from '@/components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>MKS Sistemas</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap');
        </style>
      </Head>
      <main>
        <Header />
        <Grid />
        <Footer />
      </main>
    </>
  )
}
