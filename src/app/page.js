import Link from "next/link";

export const metadata = {
  title: "Next Template | Home",
  description: "Generated by create next app by Sahin Alam",
};

export default function Home() {
  return (
    <div
    // style={{
    //   height: "50px",
    //   width: "500px",
    // }}
    >
      {/* <h1>Home page</h1> */}
      <Link href="/about">About</Link>
    </div>
  );
}
