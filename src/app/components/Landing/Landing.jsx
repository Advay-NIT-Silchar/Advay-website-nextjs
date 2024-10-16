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
        <Image src="https://res.cloudinary.com/sahincloudinary/image/upload/f_auto,q_auto/v1/Advay/back" fill alt="back" />
      <div className={styles.leftCurtain}>
        <Image src="https://res.cloudinary.com/sahincloudinary/image/upload/f_auto,q_auto/v1/Advay/leftCurtain" fill alt="leftCurtain" />
      </div>
      <div className={styles.rightCurtain}>
        <Image src="https://res.cloudinary.com/sahincloudinary/image/upload/f_auto,q_auto/v1/Advay/rightCurtain" fill alt="rightCurtain" />
      </div>
      <div className={styles.logo}>
        <Image src="https://res.cloudinary.com/sahincloudinary/image/upload/f_auto,q_auto/v1/Advay/logo" fill alt="logo" />
      </div>
      <div className={styles.title}>Coming soon
        <span>.</span><span>.</span><span>.</span>
      </div>
    </div>
  );
};

export default Landing;
