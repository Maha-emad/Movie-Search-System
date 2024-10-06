import { Header } from '@/components/Header'; 
import { Footer } from '@/components/Footer'; 
import { Cover } from '@/components/Cover'; 
import { MovieCard } from '@/components/MovieCard'; 
import styles from './HomeTemplate.module.scss';
import Link from 'next/link';

const HomeTemplate: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
	return (
   <>  
   <Header/>
   <div className={`${styles.index} ${styles.page} ${styles.container}`}>
    <div className={styles.header}>
      <h1>MaileHereko</h1>
      <p>
        List of movies and TV Shows, I,
        <Link
          href="https://pramodpoudel.com.np"
          className={styles.externalLinks}
          target="_blank"
          aria-label="Know more about pramod poudel"
          >Pramod Poudel</Link>
        have watched till date. Explore what I have watched and also feel free
        to make a
        <Link  href="#" className={styles.externalLinks}>
          suggestion.
        </Link>
      </p>
      {/* <div className={styles.searchWrapper}>
        <Input
          type="text"
          name="search"
          label="Search movies or tv shows"
          placeholder="eg. Avenger"
          leftIcon="search"
        />
      </div> */}
      
     
    </div>
     {/* <div className="loader-container list-grid" v-if="loading">
      <CardLoader :hasAction="false" v-for="index in 8" :key="index" />
    </div> */}
   
    <div className={`${styles.listsContainer} ${styles.listGrid}`}>
	   <MovieCard/>
    </div>
  </div>
   
  
   </>
  
	);
};

export default HomeTemplate;
