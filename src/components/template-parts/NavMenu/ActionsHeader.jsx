import { useState, useEffect } from 'react';

import { getCartCount, getSearch } from '../../../api';
import { Link } from 'react-router-dom';
import { SearchResult } from '../../UI/SearchResult';
export const ActionsHeader = (icons) => {
  const [bag, setBag] = useState(0);
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  console.log(icons.icons);

  useEffect(() => {
    getCartCount().then((res) => setBag(res));
  }, []);

  const handleSeach = () => {
    getSearch(`search=${search}`).then((res) => {
      console.log(res);
      setSearchResult(res);
    });
  };

  //if click anywhere hide search
  useEffect(() => {
    if (showSearch) {
      document.addEventListener('click', (e) => {
        if (e.target.id !== 'iconSearch') {
          setShowSearch(false);
          setSearchResult([]);
          setSearch('');
        }
      });
    }
  }, [showSearch]);

  useEffect(() => {
    if (showSearch) {
      //focus on input
      document.getElementById('searchInput').focus();
    }
  }, [showSearch]);

  return (
    <div className='flex flex-row gap-4'>
      <div className='search relative'>
        <img
          id='iconSearch'
          onClick={() => {
            setShowSearch(!showSearch);
          }}
          src={icons.icons.search}
          alt='search'
        />
        {showSearch && (
          <input
            id='searchInput'
            type='text'
            placeholder='Press ENTER to search'
            className='rounded w-60 h-10 px-2 absolute -top-2 -left-64 border-2 border-black'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSeach();
              }
            }}
          />
        )}
        {searchResult.length > 0 && (
          <div className='absolute top-10 -left-44  bg-white w-80 h-80 overflow-y-auto border-2 border-black'>
            <SearchResult data={searchResult} />
          </div>
        )}
      </div>
      <div className='cart relative'>
        <span className='flex items-center justify-center  h-5 text-white bg-black rounded-full text-[12px] font-bold absolute -top-2 -right-2 w-5'>
          {bag}
        </span>
        <Link to='/cart'>
          <img src={icons.icons.cart} alt='cart' />
        </Link>
      </div>
    </div>
  );
};
