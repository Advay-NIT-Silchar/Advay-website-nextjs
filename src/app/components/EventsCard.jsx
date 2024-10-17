

import styles from "./events.module.scss";
const EventCard = ({ content, title1, id, image }) => {


  
  return (
    <div
      key={id}
      className={styles.col}
      
    >
      <div className={styles.container}>
        <div className={styles.front} style={{ backgroundImage: `url(${image})` }}>
          <div className={styles.inner}>
            <p>{title1}</p>
          </div>
        </div>
        <div className={styles.back}>
          <div className={styles.inner}>
            <div className={styles.backSide}>
              <h1 className={styles.backHead}>{title1}</h1>
              <p className={styles.para}>{content}</p>
              {/* <div className={styles.buttons}>
                <a href='www.google.com' className={styles.btn}>
                  Register
                </a>
                <a href='www.google.com' className={styles.btn}>
                 Details
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
