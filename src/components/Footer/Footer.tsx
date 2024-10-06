import Link from 'next/link';
import Logo from '@/assets/images/Logo.svg';
import styles from './Footer.module.scss';


export const Footer: React.FC = () => {
	return (
  <footer className={styles.footer}>
    <div className={`${styles.footer} ${styles.container}`}>
      <div className={styles.top}>
        <div className={styles.brand}><Logo /></div>
        <div className={styles.info}>
          <p>
            A fun and personal project created by
            <Link
              href="https://github.com/Maha-emad"
              className={styles.externalLinks}
              target="_blank"
              > Maha Emad </Link>
             . Source code available on
            <Link
              href="https://github.com/Maha-emad/Movie-Search-System"
              className={styles.externalLinks}
              target="_blank"
              > Github </Link>
            . Open for pull request. Clone and use personally. It's up to you.
          </p>
        </div>
      </div>
    </div>
  </footer>

	);
};
