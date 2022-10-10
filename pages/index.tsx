import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MenuBar from '../ui/components/MenuBar/MenuBar'
import HeroText from '../ui/components/HeroText'
const Home: NextPage = () => {
  return (
     <div className={styles.frame}>
    <div className={styles.container}>
     
      <div className={styles.container}>
        <Image src={"/lamp_1200_800.png" } alt="Test" width={1200} height={800} className={styles.landingImage} />
        <div className={styles.navbar}>
          <div className={styles.logo}>
          <Image src={"/idea.png" } alt="Test" width={68} height={59}  />
            INSIGHT
          </div>
          <MenuBar title='Str'   /> 
        </div>
        <div className={styles.hero1} >
            IDEAS TO LIGHT YOUR HOME AND SPIRIT
        </div>
        <div className={styles.hero2} >
            <p> Learn from <span className={styles.accent}>+100,000</span> experiences from all around the world.</p>

        </div>
        <div className={styles.button} >
          Subscribe
        </div>
      </div>
     
     
    </div>
    </div>
  )
}

export default Home
