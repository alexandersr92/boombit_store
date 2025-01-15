import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {Modules} from './Modules'
import {getPage, getSetting} from '../api'
import {Helmet} from "react-helmet";

export const Page = ({isHome}) => {
  const {slug} = useParams();
  const [page, setPage] = useState({});
  const [setting, setSetting] = useState({});

  const getPageFromAPI = async () => {
    const params = {
      slug: isHome ? 'home' : slug
    }
    const response = await getPage(params);

    setPage(response);
    const respSetting = await getSetting()
    setSetting(respSetting)
 
  };

  useEffect(() => {
    getPageFromAPI();

  }, [slug]);

  return (
    <>
      <Helmet>
        <title>{ `${page?.title?.rendered} | ${setting?.siteTitle}`}</title>
      </Helmet>
      <div className="max-w-screen-xl mx-auto">
        <Modules modules={page?.acf?.modules}/>
      </div>

    </>
  )
}
