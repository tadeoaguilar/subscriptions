import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MenuBar from '../ui/components/MenuBar/MenuBar'
import HeroText from '../ui/components/HeroText'
import { motion } from "framer-motion";
import { title } from 'process'
const Home: NextPage = () => {


  return (

    <div className={styles.frame}>
     
      <div className={styles.container}>
        <Image src={"/lamp_1200_800.png" } alt="Test" width={1200} height={800} className={styles.landingImage} />
        <nav className={styles.navbar}>
          <div className={styles.logo}>
          <Image src={"/idea.png" } alt="Test" width={31} height={41}  />
           <span className={styles.logoTxt}> INSIGHT</span>
          </div>
          <MenuBar title='Str'   /> 
        </nav>
        <HeroText title='Str' />
      </div>
      <div className={styles.container}>
      casa
      </div>
     
    </div>
    

    
    
  )
}

export default Home
