import { useEffect } from "react";
import {Hero, ImageModule, Testimonios} from './modules/index'


export const Modules = (modules) => {

  const listOfModules = (modules) => { 

    if (modules) {

      return modules.map((module, index) => {
       return (
          <section className={`section_${module.acf_fc_layout}`} key={index}>
            {module.acf_fc_layout === 'hero' && <Hero {...module} />}
            {module.acf_fc_layout === 'imageModule' && <ImageModule {...module} />}
            {module.acf_fc_layout === 'testimonios' && <Testimonios {...module} />}
          </section>
          
       )
      })
    }
  };

  useEffect(() => {
    listOfModules();
  }, []);
  return(
    <>
      {listOfModules(modules.modules)}
    </>

  )
}
