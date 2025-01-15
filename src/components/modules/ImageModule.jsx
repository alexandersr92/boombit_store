

 const ImageModule = (module) => {

  return (
    <>
        <div>ImageModule</div>
        <img src={module.module_image_url.url} alt={module.module_image_url.alt} />
    </>

  )
}

export default ImageModule