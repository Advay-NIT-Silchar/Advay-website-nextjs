


const About = () => {
  return(
  <div
    className="relative flex flex-col items-center justify-center min-h-screen w-full bg-cover bg-center"
    style={{ backgroundImage: "url('https://res.cloudinary.com/dqlnb4ddv/image/upload/v1728995301/space_bg_gqgrxu.jpg')" }}
  >
    {/* Overlay Video */}
    <video
      className="absolute top-10 left-0 w-full h-full object-cover opacity-80" // Adjust opacity as needed
      autoPlay
      loop
      muted
    >
      <source src="https://res.cloudinary.com/dqlnb4ddv/video/upload/v1729004662/4K_26_ro9re5.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      {/* Main content */}
      <div className="relative bg-opacity-70 p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg  max-w-[90%] text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-Eagle font-bold text-white mb-4 sm:mb-6">
          About Us
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. 
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
          Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, 
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
        </p>
      </div>

      {/* Bottom Image */}
      <img 
        src="https://res.cloudinary.com/dqlnb4ddv/image/upload/v1729000062/pngegg_sha1sr.png" 
        alt="Bottom decoration" 
        className="absolute bottom-0 w-full object-contain h-16 sm:h-24 md:h-32 lg:h-40 sm:-mb-8" // Adjusted margin for mobile
      />
    </div>
  );
};

export default About;
