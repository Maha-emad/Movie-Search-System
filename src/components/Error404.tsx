import Link from 'next/link';
import NotFound from '@/assets/images/404.svg';

export const Error404: React.FC = () => {
    return(
     
  <div className="not-found container">
    <NotFound/>
    <h2>Lost your way?</h2>
    <p>
      Oops! This is awkward. You are looking for something that doesn't actually
      exist.
    </p>
    <Link href="/" className="btn">Go Home</Link>
  </div>

    );
}