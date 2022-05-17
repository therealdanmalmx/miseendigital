const Hero = () => {
  return (
    <div className="app__hero flex h-screen w-full flex-col items-center justify-center bg-secondary-color">
      <h1 className="mb-4 max-w-4xl text-center text-5xl font-bold leading-snug text-white md:text-7xl md:leading-tight">
        We <span className="text-primary-color">design, develop </span> and{" "}
        <span className="text-primary-color">modernize</span> your digital tools
      </h1>
      <p className="mb-8 px-8 text-2xl text-white text-center">
        Based remotely, with clients all over the world
      </p>
      <button className="duration-300 ease-in-out">Our Portfolio</button>
    </div>
  );
};

export default Hero;
