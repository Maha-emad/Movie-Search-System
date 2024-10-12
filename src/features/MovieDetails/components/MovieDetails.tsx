import PageCover from '@/assets/images/DetailsPageCover.svg'; 
import styles from './MovieDetails.module.scss'; 
import StarIcon from "@/assets/images/StarIcon.svg"
import { useRouter } from 'next/router';

export const MovieDetails: React.FC = () => {
  const router = useRouter();
    return(
     
      <div className={styles.detailsWrapper}>
        <div className={`${styles.poster}`}>
          <PageCover className={styles.img}/>
        </div>

        <div className={styles.detailsContainer}>
          <div className={`tagline-container ${styles.detail}`}>
            <h4 className={styles.tagline}>tagline heeeeree</h4>
          </div>
          <div className={`description-container ${styles.detail}`}>
           <p className="label">
          description heeeree
          </p>
         </div>
          <div className={`${styles.rating} ${styles.detail}`}>
            <StarIcon/>
            <p>2.24</p>
          </div>

          <div className={`type-status ${styles.detailsRow}`}>
            <div className={`type ${styles.detail}`}>
              <p className="label">Director</p>
              {/* <p className="large">Movie</p> */}
              
            </div>

           
          </div>

          <div className={`dates ${styles.detailsRow}`}>
            <div className={`release-date ${styles.detail}`}>
              <p className="label">Release date</p>
              <p className="large">12-8-2023</p>
            </div>


          </div>
          <div className={`season-episodes ${styles.detailsRow}`}>
            <div className={`seasons ${styles.detail}`}>
              <p className="label">Cast</p>
              {/* <p className="large">no. of seasons</p> */}
            </div>
    
          </div>
          
          <div className={`${styles.runTime} ${styles.detail}`}>
          <p className="label">Run time</p>
           <p className="large">
          120 minutes
        </p>
        
      </div>
          <div className={`genre ${styles.detail}`}>
            <p className="label">Genres</p>
            <p className={styles.genreWrapper}>
              <span
                className="genre large"
              >
                genre heereee
              </span>
            </p>
          </div>
        </div>
      </div>
    
    
    );
}