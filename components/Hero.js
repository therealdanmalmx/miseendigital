const Hero = () => {
  return (
    <div class="app_hero w-full h-screen bg-secondary-color flex flex-col justify-center items-center">
        <h1 className="mb-4 text-white font-bold text-5xl text-center leading-snug md:text-7xl max-w-4xl md:leading-tight">
            We <span className="text-primary-color">design</span> and <span className="text-primary-color">develop</span> digital solutions
        </h1>
        <p className="text-white text-2xl mb-8">Based remotely, with clients all over the world</p>
        <button>Our Portfolio</button>
    </div>
  )
}

export default Hero