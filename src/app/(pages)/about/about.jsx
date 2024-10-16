import Image from "next/image";


const About = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('https://res.cloudinary.com/dqlnb4ddv/image/upload/v1728995301/space_bg_gqgrxu.jpg')" }}
    >
      {/* Overlay Video */}
      <video
        className="absolute top-10 left-0 w-full h-full object-cover opacity-80"
        autoPlay
        loop
        muted
      >
        <source src="https://res.cloudinary.com/dqlnb4ddv/video/upload/v1729004662/4K_26_ro9re5.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main content */}
      <div className="relative bg-opacity-70 p-6 sm:p-6 md:p-8 lg:p-10 rounded-lg max-w-[90%] text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-Eagle font-bold text-white mb-4 sm:mb-6">
          About Us
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
          The Dramatics Club of NIT Silchar, known as Advay, is a dynamic and spirited group that thrives on creativity and collaboration. Whether it &apos; s staging powerful theatrical performances, hosting workshops, or organizing events, the club provides a platform for students to explore their talents and bring stories to life. Advay is not just about acting; it&apos;s about building confidence, expressing emotions, and fostering a sense of community. With every performance, the club leaves a lasting impression, promoting the transformative power of drama and art on campus and beyond.
        </p>
      </div>

      {/* Bottom Image */}
      <Image 
        src="https://res.cloudinary.com/dqlnb4ddv/image/upload/v1729000062/pngegg_sha1sr.png" 
        alt="Bottom decoration" 
        width={200} // Specify the width in pixels
        height={200} // Specify the height in pixels (adjust according to your needs)
        className="absolute bottom-0 object-contain" // Adjust className as needed
      />
    </div>
  );
};

export default About;

