import axios from 'axios';

//convert obnject to query string
function objToQueryString(obj) {
  const keyValuePairs = [];
  for (const key in obj) {
    keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
  }
  return keyValuePairs.join('&');
}

async function getPage (params){
  params = objToQueryString(params)
  const rest = await axios.get(`/wp-json/wp/v2/pages?${params}&acf_format=standard`);

  return rest.data[0];
}

async function getPostType (params){

  const rest = await axios.get(`/wp-json/wp/v2/pages?${params}&acf_format=standard`);
  return rest.data[0];
}

async function getMenu (name){
  const rest = await axios.get(`/wp-json/wp/v2/siteMenu/${name}`);

  return rest.data
}
async function getSetting (){
  const rest = await axios.get(`/wp-json/wp/v2/siteSettings`);
  return rest.data
}

async function getSingleBySlug(postType, slug){
  const rest = await axios.get(`/wp-json/wp/v2/${postType}?slug=${slug}`);
  return rest.data[0];
}

async function getSingleById(postType, id){
  const rest = await axios.get(`/wp-json/wp/v2/${postType}/${id}`);
  return rest.data;
}

async function getSearch (params){
  const rest = await axios.get(`/wp-json/wp/v2/search/?${params}`);

  return rest.data[0];

}

export { getPage, getPostType, getMenu,getSetting, getSingleBySlug, getSingleById, getSearch};
