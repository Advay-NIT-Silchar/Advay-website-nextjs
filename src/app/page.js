// import Link from "next/link";

// import Landing from "./components/App";

import Landing from "./components/Landing/Landing";
import Sponsor from "./components/Sponsors/Sponsors";


export const metadata = {
  title: "Advay NIT Silchar | Home",
};

export default function Home() {
  return (
    <div
      // style={{
      //   paddingTop: "5rem",
      // }}
    >
      {/* <div
        style={{
          height: "100vh",
        }}
      ></div> */}
      {/* <h1>Home page</h1>
      <Link href="/about">About</Link> */}
      {/* <Landing/> */}
      <Landing/>
      <Sponsor title="sponsor" id="sponsors" />
      
    </div>
  );
}
