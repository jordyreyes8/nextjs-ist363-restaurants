import styles from './Button.module.scss'
import Link from 'next/link'

const Button = ({ 
    label = "Undefined label", 
    clickHandler,
    path
}) => {
   // console.log({props});
   return path ? 
    <Link href={path} className={styles.btn}>
        {label}
    </Link>
    : 
    <button className={styles.btn} onClick={clickHandler}>{label}</button>
}
export default Button