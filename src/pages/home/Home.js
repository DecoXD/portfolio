import styles from "./Home.module.css"
import MyApresentation from "./HomeComps/MyApresentation"

const Home = () => {
  return (
    <section className={styles.homeSection}>
<MyApresentation/>


    </section>
  )
}

export default Home