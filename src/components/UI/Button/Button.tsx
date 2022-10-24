import { FC, memo } from 'react'
import styles from './Button.module.css'

interface IProps {
  title: string
  outline?: string
  onClick?: () => {}
}

const Button: FC<IProps> = ({ title, outline = '', onClick = () => {} }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {title}
    </button>
  )
}

export default memo(Button)
