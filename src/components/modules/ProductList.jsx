import { ProductCard } from '../UI/ProductCard';
import { getProduct } from '../../api';
import { useState, useEffect } from 'react';

export const ProductList = (module) => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    getProduct(module.number_of_post).then((res) => setProductsList(res));
  }, []);

  return (
    <section className='py-40'>
      <h2 className='font-black text-center text-[50px] uppercase'>
        {module.title}
      </h2>
      <div className='grid grid-flow-col-1 md:grid-cols-4 gap-4 mt-10 mx-4 md:mx-0'>
        {productsList.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </div>
    </section>
  );
};
