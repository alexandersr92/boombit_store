
import { Link } from "react-router-dom"
export const NavMenu = (menu) => {

  return (
    <>

 
    <ul className="flex flex-row items-center justify-end gap-3 w-10/12">
      {menu.menu.map((item, index) => (
        <li key={index}>
          <Link className="bg-blue-200 hover:bg-slate-200 block p-2 rounded-md" to={item?.url}>{item?.title}</Link>
        </li>))
      }
    
    </ul>
    </>
  )
}
