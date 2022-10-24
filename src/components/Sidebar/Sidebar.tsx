import { memo } from 'react'
import styles from './Sidebar.module.css'

const Sidebar = () => {
  return <div className={styles.sidebar}>Sidebar</div>
}

export default memo(Sidebar)
