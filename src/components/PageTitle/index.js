import { useHistory } from 'react-router-dom'
import { ReactComponent as BackArrow} from '../../assets/back-arrow.svg'
import styles from './PageTitle.module.css'

function PageTitle({ label = '', showBack = false }) {
  const history = useHistory()
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleContainer}>
        {showBack && (
          <BackArrow
            width={35}
            height={35}
            onClick={() => history.goBack()}
            className={styles.backArrow}
          />
        )}
        <h1 className={styles.title}>{label}</h1>
      </div>
      <img
        className={styles.image}
        src="https://www.cryptocompare.com/media/35651260/logodbg.png" alt="CryptoCompare"
      />
    </div>
  )
}

export default PageTitle
