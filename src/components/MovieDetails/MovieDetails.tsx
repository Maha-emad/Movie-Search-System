import { FavButton } from '@/components/FavButton';
import Link from 'next/link';
import Logo from '@/assets/images/Logo.svg'; 
import PageCover from '@/assets/images/DetailsPageCover.svg'; 
import PagePoster from '@/assets/images/DetailsPagePoster.svg';
import styles from './MovieDetails.module.scss'; 
import StarIcon from '@/components/StarIcon';


export const MovieDetails: React.FC = () => {
    return(
     
      <div className={styles.detailsWrapper}>
        <div className="poster image">
          <PageCover/>
        </div>
        <div className={styles.detailsContainer}>
          <div className={`tagline-container ${styles.detail}`}>
            <h4 className={styles.tagline}>
              tagline heeeeree
            </h4>
          </div>
          <div className={`description-container ${styles.detail}`}>
            <p className="label">
              description hereee
            </p>
          </div>
          <div className={` ${styles.rating} ${styles.detail}`}>
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
          <p class="label">Run time</p>
           <p class="large">
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