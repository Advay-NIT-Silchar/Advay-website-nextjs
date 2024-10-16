import Image from "next/image";
import Title from "../Section/Title/Title";
import styles from "./Sponsors.module.scss";

const Sponsor = () => {
  const sponsors = [
    {
      id: 1,
      name: "Unibic",
      imageUrl: "/images/unibic.jpg",
    },
    {
      id: 2,
      name: "max fashion",
      imageUrl: "/images/logo_max.webp",
    },
  ];
  return (
    <div className={styles.sponsor} id="sponsors">
      <Title title="Past Sponsors" />
      <div className={styles.cardContainer}>
        {sponsors.map((item) => {
          return (
            <div className={styles.card} key={item.id}>
              <div className={styles.image} >
                <Image src={item.imageUrl} fill alt={item.name} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sponsor;
