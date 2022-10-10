import React,{FC} from 'react'

interface MenuProps {
    title: string;
}
import styles from './HeroBar.module.css'

const HeroText:FC<MenuProps>  = ({title }) => {
  
  return (
    <>
        <div className={styles.hero1} >
            IDEAS TO LIGHT YOUR HOME AND SPIRIT
        </div>
        <div className={styles.hero2} >
            Lear from <span> +100,000</span> experiences from around the world.

        </div>
    </>
  )
}

export default HeroText