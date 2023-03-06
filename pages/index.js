import Head from 'next/head';
import styles from "../styles/Home.module.css";

import { About, Contact, HomeCard, Location, Services } from '@/widgets';
import { Billing } from '@/widgets/Billing';

export default function Home() {
  return (
    <div
      className={styles.root}
    >
      <Head>
        <title>Marroquin Truck & Trailer Repair - Mobile Diesel Mechanic in the Bay Area</title>
        
        <meta name="description" content="Marroquin Truck & Trailer Repair is a mobile diesel mechanic company operating 24 hours a day in the Bay Area. We offer a variety of services, from engine repair to brake replacement. Contact us today to schedule an appointment."/>
        <meta name="keywords" content="diesel mechanic, truck repair, trailer repair, engine repair, brake replacement, Bay Area, Gilroy"/>
        <meta name="author" content="Marroquin Truck & Trailer Repair"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <HomeCard/>

      <Services/>
      <Contact/>
      <Location/>
      <Billing/>
      <About/>

    </div>
  )
}
