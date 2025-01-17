import { Link } from 'react-router-dom';

export const SearchResult = (data) => {
  return (
    <div>
      {data.data.map((item) => {
        return (
          <Link
            to={item.link}
            key={item.id}
            className='flex flex-row gap-2 p-2 hover:bg-gray-200'
          >
            <img src={item.thumbnail} alt={item.title} className='w-20 h-20' />
            <div>
              <h2 className='text-lg font-semibold'>{item.title}</h2>
              <span className='inline-block bg-black rounded-full text-white text-xs px-2 py-1'>
                {item.type}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
