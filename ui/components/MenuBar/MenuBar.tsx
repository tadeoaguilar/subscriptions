import React,{FC} from 'react'

interface MenuProps {
    title: string;
}
import styles from './MenuBar.module.css'

const MenuBar:FC<MenuProps>  = ({title }) => {
  let menuTitles = ['Subscribe','Articles','Contact','About Us']
  return (
    <>
        <div className={styles.container} >
          {
            menuTitles.map((title)=> {

              return (
                <>
                  <div className={styles.button}>
                    {title}
                  </div>
                </>
              )
            }  )
          }

        </div>
    </>
  )
}

export default MenuBar