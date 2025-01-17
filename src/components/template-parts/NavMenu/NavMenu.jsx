import { Link } from 'react-router-dom';
export const NavMenu = (menu) => {
  return (
    <>
      <ul className='flex flex-row items-center justify-center gap-8 w-10/12'>
        {menu.menu.map((item, index) => (
          <li key={index}>
            <Link
              className='block border-b-4 border-transparent hover:border-black pb-1 '
              to={item?.url}
            >
              {item?.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
