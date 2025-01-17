const Hero = (module) => {
  return (
    <section
      className='w-screen ml-[calc(50%-50vw)] h-[calc(100vh-5rem)] flex items-center justify-center bg-cover bg-center'
      style={{ backgroundImage: `url(${module.image.url})` }}
    >
      <div className='flex flex-col items-center justify-center bg-black bg-opacity-50 p-10'>
        <h1 className='text-center font-black text-white text-[60px] uppercase'>
          {module.h1_title}
        </h1>
        <p className='text-center  text-white text-lg '>{module.description}</p>
        <a
          href={module.link.url}
          className='bg-white text-black p-2 mt-4 text-[20px] uppercase  mx-auto'
        >
          {module.link.title}
        </a>
      </div>
    </section>
  );
};

export default Hero;
