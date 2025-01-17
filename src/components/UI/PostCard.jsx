import { Link } from 'react-router-dom';
import noimagepost from '../../assets/noimagepost.jpg';

export const PostCard = (post) => {
  const image = post.thumbnail ? post.thumbnail : noimagepost;

  return (
    <div>
      <div>
        <img className='h-60 w-full object-cover' src={image} alt='' />
      </div>
      <div className='h-40 flex flex-col gap-2 bg-gray-100 p-4'>
        <h2 className='text-lg font-black '>{post.title.rendered}</h2>

        <p
          className='line-clamp-3 text-sm'
          dangerouslySetInnerHTML={{
            __html: post.excerpt.rendered || '<p>No description available.</p>',
          }}
        />
        <Link
          to={post.link}
          className='block w-36 bg-black text-white rounded  group-hover:bottom-4  font-bold  p-2  z-30  '
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
