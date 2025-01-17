import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleBySlug } from '../api';
import noimagepost from '../assets/noimagepost.jpg';

export const SinglePost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reiniciar error al cargar nuevos datos
      try {
        const response = await getSingleBySlug('posts', slug);
        setPost(response);
      } catch (err) {
        setError('Failed to fetch the product. Please try again.');
        console.error('Error fetching product:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return <div className='text-center py-20'>Loading...</div>;
  }

  if (error) {
    return <div className='text-center py-20 text-red-500'>{error}</div>;
  }

  if (!post) {
    return <div className='text-center py-20'>No product found.</div>;
  }

  return (
    <div className='max-w-screen-xl mx-auto py-20'>
      {/* Imagen de cabecera */}
      <div className='relative h-96 w-full overflow-hidden'>
        <img
          className='absolute top-0 left-0 w-full h-full object-cover'
          src={post.thumbnail || noimagepost}
          alt={post.title?.rendered || 'Product'}
        />
        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
          <h1 className='text-4xl font-bold text-white text-center'>
            {post.title?.rendered || 'Product Title'}
          </h1>
        </div>
      </div>

      {/* Contenido del producto */}
      <div className='bg-white p-8 shadow-md mt-8 rounded-lg'>
        <p
          className='text-gray-700 text-lg leading-relaxed'
          dangerouslySetInnerHTML={{
            __html:
              post.content?.rendered || '<p>No description available.</p>',
          }}
        />
      </div>
    </div>
  );
};
