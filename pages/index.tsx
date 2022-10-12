import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MenuBar from '../ui/components/MenuBar/MenuBar'
import HeroText from '../ui/components/HeroText'
import { motion } from "framer-motion";
import { title } from 'process'
const Home: NextPage = () => {
   const titleAnim = {
    hidden: { y: 200 },
    show: {
      y: 0,
      transition: { duration: .75, ease: "easeOut" },
    },
  };
  const fade = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { ease: "easeOut", duration: 3 },
    },
  };


   const btnLtR = {
    hidden: { x: 60 },
    show: {
      x: 0 ,
      transition: { duration: .75, ease: "easeOut" },
    },
  };


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
        <motion.div className={styles.hero1} 
                  variants={titleAnim}
                   animate="show"
                   initial= "hidden"
                   
                   
                   >
            <p > IDEAS TO LIGHT YOUR HOME AND SPIRIT </p>
        </motion.div>
        <motion.div className={styles.hero2} 
                    variants= {fade}
                    animate="show"
                    initial="hidden"
        >
            <p > Learn from <span className={styles.accent}>+100,000</span> experiences from all around the world.</p>

        </motion.div>
        <motion.div  
                className={styles.button} 
                variants= {btnLtR}
                animate="show"
                initial="hidden"
        >
          Subscribe
        </motion.div>
      </div>
      
     
    </div>
    
    
    </div>
    
  )
}

export default Home
