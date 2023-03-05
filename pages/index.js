import Head from 'next/head';
import styles from "../styles/Home.module.css";

import { About, Contact, HomeCard, Location, Services } from '@/widgets';

export default function Home() {
  return (
    <div
      className={styles.root}
    >
      <Head>
        <title>Marroquin Truck & Trailer Repair</title>
        <meta name="description" content="We are Marroquin Truck & Trailer Repair. Roadside Repairs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <HomeCard/>

      <Services/>
      <Contact/>
      <Location/>
      <About/>

    </div>
  )
}
