import Star from '../../assets/star.svg';
import { addToCart } from '../../api';
import { Link } from 'react-router-dom';
export const ProductCard = (product) => {
  const prod = product.product;

  const hotPrice = prod.offer !== '' ? true : false;

  const handleAddToCart = () => {
    addToCart({ id: prod.id.toString() });
  };

  return (
    <div>
      <Link to={prod.link} className='h-80 overflow-hidden relative group  '>
        {hotPrice && (
          <div className='bg-black text-white font-black text-xs rounded-md absolute top-2 left-2 p-2'>
            HOT
          </div>
        )}
        <img
          src={prod.thumbnail}
          alt=''
          className='object-cover h-80 w-full hover:scale-110 transition-all ease-in duration-100'
        />
      </Link>
      <button
        onClick={handleAddToCart}
        className=' bg-black text-white rounded  group-hover:bottom-4  font-bold  p-2  z-30  w-full '
      >
        Add to cart
      </button>
      <div className='flex flex-col gap-2 mt-2'>
        <div className='flex flex-row items-center gap-2'>
          {
            <div className='flex justify-center'>
              {[...Array(5)].map((star, index) => (
                <img src={Star} key={index} alt='' />
              ))}
            </div>
          }
        </div>
        <h2 className='font-bold text-lg'>{prod.title.rendered}</h2>
        <div className='flex flex-row items-center gap-2'>
          <span className={`${hotPrice ? 'line-through' : ''} `}>
            C$ {prod.price}
          </span>
          {hotPrice && <span className='font-bold'>C$ {prod.offer}</span>}
        </div>
      </div>
    </div>
  );
};
