import Image from "next/image";
import { Sixtyfour } from "next/font/google";
import styles from "./Landing.module.scss";


const sixty= Sixtyfour({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
})
const Landing = () => {
  return (
    <div className={`${styles.Landing} ${sixty.className}`}>
        <Image src="/images/back.webp" fill alt="back" />
      <div className={styles.leftCurtain}>
        <Image src="/images/curtainLeft.webp" fill alt="leftCurtain" />
      </div>
      <div className={styles.rightCurtain}>
        <Image src="/images/curtainRight.webp" fill alt="rightCurtain" />
      </div>
      <div className={styles.logo}>
        <Image src="/images/Drama-Logo.webp" fill alt="logo" />
      </div>
      <div className={styles.title}>Coming soon
        <span>.</span><span>.</span><span>.</span>
      </div>
    </div>
  );
};

export default Landing;
