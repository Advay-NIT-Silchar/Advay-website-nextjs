import { Agdasima } from 'next/font/google'


import styles from "./Title.module.scss"

const agdasima= Agdasima({
    subsets:["latin"],
    weight:'400'
})

const Title = ({title="Title"}) => {
    return ( 
        <h2 className={`${styles.Title} ${agdasima.className}`}>
            {title}
        </h2>
     );
}
 
export default Title;