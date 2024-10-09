import Link from 'next/link';
import styles from './FavList.module.scss';
import { MovieCard } from '../MovieCard';


export const FavList: React.FC = () => { 

    return(
       
  <div className={`${styles.FavPage} page container`}>

    <div className={styles.header}>
      <h1>Check your Favs 😉</h1>
    </div>

    <div className={`${styles.listsContainer}  listGrid`}>
     <MovieCard/> 
     <MovieCard/> 
     <MovieCard/> 
     <MovieCard/> 
     <MovieCard/> 
     <MovieCard/>
    </div>


    {/* <div class="loader-container list-grid" v-if="loading">
      <CardLoader v-for="index in 8" :key="index" />
    </div> */}


  
    <div className={styles.noResultsContainer} v-if="noResults">
      <h2>No Favorite movies yet !</h2>
     
      {/* <Button
        className="ctaBtn"
        label="Go To Search"
        @click.native="manualSuggestion"
      ></Button> */}
    </div> 
    </div>
    




    );

}