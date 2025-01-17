import { useState, useEffect } from 'react';
import { getPostType } from '../api';
import { PostCard } from './UI/PostCard';
export const Archive = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  const getPosts = async () => {
    const response = await getPostType('posts');
    setPosts(response);
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  const loadMore = async () => {
    const response = await getPostType('posts', page + 1);
    setPosts([...posts, ...response]);
    setPage(page + 1);
  };

  return (
    <div className='max-w-screen-xl mx-auto'>
      <h1 className='text-5xl text-center font-black my-10'>Blog</h1>
      <div className='grid grid-flow-col-1 md:grid-cols-4 gap-4 mx-4 md:mx-0'>
        {posts &&
          posts.map((post, index) => <PostCard key={index} {...post} />)}
      </div>
      <div className='flex justify-center py-10'>
        <button onClick={loadMore} className='bg-black text-white p-2'>
          Load More
        </button>
      </div>
    </div>
  );
};
