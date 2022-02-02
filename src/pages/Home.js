import herobanner from '../assets/herobanner.jpg';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  const title = "Welcome to ABC Online Bookstore";
  return (
    <div>
      <h1 className="text-primary p-3">{title}</h1>
      <img src={herobanner} alt="" className="pb-5" width="600" />      
      <p className="lead">We have picture books, fiction, non-fiction, education, cooking, bestselling, hardcover books, paperback books  and much more. </p>
      <p className="lead pb-3">Browse and shop for variety type of books. Free shipping for oder over $50. </p>
      <Link to="/shop">  
        <Button>BUY NOW</Button> 
      </Link>   
    </div>
  );
}

export default Home;