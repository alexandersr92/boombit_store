import axios from 'axios';

//convert obnject to query string
function objToQueryString(obj) {
  const keyValuePairs = [];
  for (const key in obj) {
    keyValuePairs.push(
      encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])
    );
  }
  return keyValuePairs.join('&');
}

async function getPage(params) {
  params = objToQueryString(params);
  const rest = await axios.get(
    `/wp-json/wp/v2/pages?${params}&acf_format=standard`
  );

  return rest.data[0];
}

async function getPostType(params, page = 1) {
  const rest = await axios.get(
    `/wp-json/wp/v2/${params}?acf_format=standard&per_page=12&page=${page}`
  );
  return rest.data;
}

async function getMenu(name) {
  const rest = await axios.get(`/wp-json/wp/v2/siteMenu/${name}`);

  return rest.data;
}

async function getProduct(count) {
  let perPage = '';
  if (count !== '') {
    perPage = `?per_page=${count}`;
  }
  const rest = await axios.get(`/wp-json/wp/v2/product${perPage}`);

  return rest.data;
}
async function getSetting() {
  const rest = await axios.get(`/wp-json/wp/v2/siteSettings`);
  return rest.data;
}

async function getSingleBySlug(postType, slug) {
  const rest = await axios.get(`/wp-json/wp/v2/${postType}?slug=${slug}`);
  return rest.data[0];
}

async function getSingleById(postType, id) {
  const rest = await axios.get(`/wp-json/wp/v2/${postType}/${id}`);
  return rest.data;
}

async function getSearch(params) {
  const rest = await axios.get(`/wp-json/wp/v2/search/?${params}`);

  return rest.data;
}
async function getCartCount() {
  const rest = await axios.get(`/wp-json/cocart/v2/cart/items/count`);

  return rest.data;
}

async function addToCart(data) {
  ///wp-json/cocart/v2/cart/add-item
  const rest = await axios.post(`/wp-json/cocart/v2/cart/add-item`, data).then(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );
  return rest.data;
}

async function getProductBySlug(slug) {
  const rest = await axios.get(`/wp-json/wp/v2/product?slug=${slug}`);
  return rest.data[0];
}

async function getCart() {
  ///wp-json/cocart/v2/cart
  const rest = await axios.get('/wp-json/cocart/v2/cart');
  return rest.data;
}

async function getCheckout() {
  const rest = await axios.get('/wp-json/wp/v2/checkout-html');
  return rest.data;
}

export {
  getPage,
  getPostType,
  getMenu,
  getSetting,
  getSingleBySlug,
  getSingleById,
  getSearch,
  getCartCount,
  getProduct,
  addToCart,
  getProductBySlug,
  getCart,
  getCheckout,
};
