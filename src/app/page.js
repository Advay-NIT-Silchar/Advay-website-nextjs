// import Link from "next/link";

// import Landing from "./components/App";

import Landing from "./components/Landing/Landing";
import About from "./(pages)/about/about";
import Sponsor from "./components/Sponsors/Sponsors";
import Events from "./(pages)/about/Events";

export const metadata = {
  title: "Advay NIT Silchar | Home",
};

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Events />
      <Sponsor />
    </>
  );
}
