const Hero = () => {
  return (
    <div class="app_hero flex h-screen w-full flex-col items-center justify-center bg-secondary-color">
      <h1 className="mb-4 max-w-4xl text-center text-5xl font-bold leading-snug text-white md:text-7xl md:leading-tight">
        We <span className="text-primary-color">design</span> and{" "}
        <span className="text-primary-color">develop</span> digital solutions
      </h1>
      <p className="mb-8 text-2xl text-white">
        Based remotely, with clients all over the world
      </p>
      <button className="duration-300 ease-in-out">Our Portfolio</button>
    </div>
  );
};

export default Hero;
