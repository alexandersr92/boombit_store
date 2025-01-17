import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductBySlug } from '../api';
import Star from '../assets/star.svg';
import { addToCart } from '../api';

export const SingleProduct = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [qty, setQty] = useState(1);

  const getProductFromAPI = async () => {
    try {
      setLoading(true);
      const response = await getProductBySlug(slug);
      setProduct(response);
    } catch (err) {
      console.error(err);
      setError('Failed to load product.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductFromAPI();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>No product found.</div>;
  }

  const hotPrice = product.offer && product.offer !== '';

  const handleAddToCart = () => {
    addToCart({ id: product.id.toString(), quantity: qty.toString() });
  };

  return (
    <div className='max-w-screen-xl mx-auto py-20'>
      <div className='grid grid-flow-col-1 px-4 md:px-0 md:grid-cols-2 gap-4'>
        <div>
          <img
            className='h-40'
            src={product.thumbnail || '/placeholder.jpg'} // Imagen por defecto
            alt={product.title?.rendered || 'Product'}
          />
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-row items-center gap-2'>
            {
              <div className='flex justify-center'>
                {[...Array(5)].map((star, index) => (
                  <img src={Star} key={index} alt='' />
                ))}
              </div>
            }
          </div>
          <h1 className='text-3xl font-bold'>
            {product.title?.rendered || 'Product Title'}
          </h1>

          <p
            dangerouslySetInnerHTML={{
              __html:
                product.content?.rendered || '<p>No description available.</p>',
            }}
          />

          <div className='flex flex-row items-center gap-2 text-2xl'>
            <span className={`${hotPrice ? 'line-through' : ''}`}>
              C$ {product.price || 'N/A'}
            </span>
            {hotPrice && <span className='font-bold'>C$ {product.offer}</span>}
          </div>
          <div className='flex flex-col  md:flex-row gap-4'>
            <div className='flex w-full md:w-auto'>
              <button
                onClick={() => {
                  if (qty > 1) {
                    setQty(qty - 1);
                  }
                }}
                className='flex items-center justify-center bg-gray-800 text-white h-10 w-10 rounded-l-lg'
              >
                -
              </button>
              <input
                className='border-y-2 border-black h-10 w-full md:w-20 p-4 font-bold text-center'
                type='number'
                id='qty'
                name='qty'
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
              <button
                onClick={() => {
                  setQty(qty + 1);
                }}
                className='flex items-center justify-center bg-gray-800 text-white h-10 w-10 rounded-r-lg'
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className=' bg-black text-white rounded  group-hover:bottom-4  font-bold  p-2  z-30  w-full '
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
