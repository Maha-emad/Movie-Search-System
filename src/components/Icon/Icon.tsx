import Link from 'next/link';
import Logo from '@/assets/images/Logo.svg';
import {useState , useEffect} from 'react'  ;  
type IconProps {
    name?: string ;  
    size?: number ; 
}

export const Icon: React.FC <IconProps> = ({ name, size = 24 }) => { 

const [icon, setIcon] = useState<string | null>(null); 

useEffect(() => {

    const renderIcon = (name : string) => {

      switch (name) {
        case 'arrow-right':
          return `<svg width="${size}" height="${size}" viewBox="0 0 24 24">
                    <path d="M14.4299 5.92999L20.4999 12L14.4299 18.07" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3.5 12H20.33" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>`;

        case 'movie':
          return `<svg width="${size}" height="${size}" viewBox="0 0 24 24">
                    <path d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2.52002 7.10999H21.48" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.52002 2.10999V6.96999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.48 2.10999V6.51999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.75 14.45V13.25C9.75 11.71 10.84 11.08 12.17 11.85L13.21 12.45L14.25 13.05C15.58 13.82 15.58 15.08 14.25 15.85L13.21 16.45L12.17 17.05C10.84 17.82 9.75 17.19 9.75 15.65V14.45Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>`;

        case 'link':
          return `<svg width="24" height="24" viewBox="0 0 24 24" >
            <path d="M3.27 12C2.48 11.05 2 9.83 2 8.5C2 5.48 4.47 3 7.5 3H12.5C15.52 3 18 5.48 18 8.5C18 11.52 15.53 14 12.5 14H10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.73 12C21.52 12.95 22 14.17 22 15.5C22 18.52 19.53 21 16.5 21H11.5C8.48 21 6 18.52 6 15.5C6 12.48 8.47 10 11.5 10H14" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`;

        case 'star':
          return `<svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M13.7299 3.51L15.4899 7.03C15.7299 7.52 16.3699 7.99 16.9099 8.08L20.0999 8.61C22.1399 8.95 22.6199 10.43 21.1499 11.89L18.6699 14.37C18.2499 14.79 18.0199 15.6 18.1499 16.18L18.8599 19.25C19.4199 21.68 18.1299 22.62 15.9799 21.35L12.9899 19.58C12.4499 19.26 11.5599 19.26 11.0099 19.58L8.01991 21.35C5.87991 22.62 4.57991 21.67 5.13991 19.25L5.84991 16.18C5.97991 15.6 5.74991 14.79 5.32991 14.37L2.84991 11.89C1.38991 10.43 1.85991 8.95 3.89991 8.61L7.08991 8.08C7.61991 7.99 8.25991 7.52 8.49991 7.03L10.2599 3.51C11.2199 1.6 12.7799 1.6 13.7299 3.51Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`;

        case 'search':
            return `<svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 22L20 20"stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`;          
        
        default:
          return null;
      }
    };

 setIcon(renderIcon());

  },[name, size]);

  return (
    <div
      className="icon"
      dangerouslySetInnerHTML={{ __html: icon || '' }} 
    ></div>
	);
};
