import { useEffect } from 'react';
import {
  Hero,
  ImageModule,
  Testimonios,
  Cart,
  Checkout,
} from './modules/index';
import { ProductList } from './modules/ProductList';

export const Modules = (modules) => {
  const listOfModules = (modules) => {
    if (modules) {
      return modules.map((module, index) => {
        return (
          <section className={`section_${module.acf_fc_layout}`} key={index}>
            {module.acf_fc_layout === 'hero' && <Hero {...module} />}
            {module.acf_fc_layout === 'imageModule' && (
              <ImageModule {...module} />
            )}
            {module.acf_fc_layout === 'testimonios' && (
              <Testimonios {...module} />
            )}
            {module.acf_fc_layout === 'productListModule' && (
              <ProductList {...module} />
            )}
            {module.acf_fc_layout === 'cart' && <Cart {...module} />}
            {module.acf_fc_layout === 'checkout' && <Checkout {...module} />}
          </section>
        );
      });
    }
  };

  useEffect(() => {
    listOfModules();
  }, []);
  return <>{listOfModules(modules.modules)}</>;
};
