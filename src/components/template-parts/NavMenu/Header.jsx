import { Brand } from './Brand';
import { NavMenu } from './NavMenu';
import { useState, useEffect } from 'react';
import { getMenu, getSetting } from '../../../api';
import { ActionsHeader } from './ActionsHeader';
export const Header = () => {
  const [menu, setMenu] = useState([]);
  const [logo, setLogo] = useState({});

  useEffect(() => {
    getMenu('main').then((res) => setMenu(res));
    getSetting().then((res) => setLogo(res));
  }, []);

  return (
    <>
      <header className=' bg-white'>
        <div className='flex flex-row justify-between items-center p-4 max-w-screen-xl mx-auto'>
          <Brand brand={logo.acf} />
          <NavMenu menu={menu} />
          <ActionsHeader />
        </div>
      </header>
    </>
  );
};
