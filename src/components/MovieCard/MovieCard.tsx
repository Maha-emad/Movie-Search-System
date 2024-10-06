import Link from 'next/link';
import Poster from '@/assets/images/poster.svg'; 
import Image from 'next/image';
import styles from './MovieCard.module.scss'; 
//import { Icon } from '@/components/Icon'; 
import StarIcon from '@/components/StarIcon' ;
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'; 
import {useState , useEffect} from 'react'; 

export const MovieCard: React.FC = () => {

    const [Fav , setFav]=useState<boolean>(false) ;

    const item : IconProps = {
        name:"star" ,
        size: 24 ,
    };  


    const favClicked = () => {
        setFav(Fav => !Fav);
    }

    return(
        
        <div className={styles.cardWrapper}>
          <div className={styles.cardContent}>

            <div className={styles.cardRating}>     
              <StarIcon /> 
              <span>2.24</span>
            </div>
            
            <Link 
              href="/"
              className={`${styles.cardImage} image`} >
              <Poster  className={styles.img}/>
            </Link>

            <div className={styles.cardInfo}> 
                {/* TODO:  Add link when clicked on the title*/}
                <div className={styles.cardDetails}>
                <Link
                href="/"
                className={styles.title}
                >film title
              </Link>    
              
              <p>Release year</p>
                </div>
              <div className={styles.favIcon}> 
              <Link 
                href='#'
                onClick={favClicked}> 
                 {
                Fav ? <FavoriteIcon/> : <FavoriteBorderOutlinedIcon/>
              }
              </Link>    
             
              </div>

            </div>
          </div>
        </div> 
    );
}