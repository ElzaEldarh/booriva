import styles from './banner.module.sass'

const Banner =()=>{
    return(
        <div className={styles['banner-container']}>
        <img className={styles['banner-image']} src="public\baner.png" alt="baner" />
        </div>
    )
}
export default Banner