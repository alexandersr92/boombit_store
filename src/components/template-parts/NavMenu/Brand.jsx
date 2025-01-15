import { Link } from "react-router-dom"

export const Brand = (brand) => {


  return (
    <>
      <Link className="w-2/12" to="/">

          <img className="hidden md:block" src={brand?.brand?.logo?.url} alt={brand?.brand?.logo?.alt} />
          <img className="block md:hidden" src={brand?.brand?.mobile_logo?.url} alt={brand?.brand?.mobile_logo?.alt} />

      </Link>
 
    </>

  )
}

