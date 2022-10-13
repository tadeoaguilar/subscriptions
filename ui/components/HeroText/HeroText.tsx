import React,{FC} from 'react'
import { motion } from "framer-motion";
interface MenuProps {
    title: string;
}
import styles from './HeroBar.module.css'

const HeroText:FC<MenuProps>  = ({title }) => {
  const titleAnim = {
    hidden: { y: 200 },
    show: {
      y: 0,
      transition: { duration: 2, ease: "easeOut" },
    },
  };
  const fade = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { ease: "easeOut", duration: 2 },
    },
  };


   const btnLtR = {
    hidden: { x: 60 },
    show: {
      x: 0 ,
      transition: { duration: 2, ease: "easeOut" },
    },
  };
  return (
    <>
       <div className = {styles.heroText}>
          <motion.div className={styles.hero1} 
                    variants={titleAnim}
                    animate="show"
                    initial= "hidden"
                    
                    
                    >
              <p className={styles.line}> IDEAS TO LIGHT YOUR HOME AND SPIRIT </p>
          </motion.div>
          <motion.div className={styles.hero2} 
                      variants= {fade}
                      animate="show"
                      initial="hidden"
          >
              <p className={styles.line} > Learn from <span className={styles.accent}>+100,000</span> experiences from all around the world.</p>

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
    </>
  )
}

export default HeroText