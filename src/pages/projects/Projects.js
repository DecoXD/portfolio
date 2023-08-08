//swiper
import {Swiper,SwiperSlide} from 'swiper/react'
import {A11y, Autoplay, FreeMode, Keyboard, Navigation, Pagination} from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import styles from "./Projects.module.css"
import {Link} from 'react-router-dom'

// images
import MiniBlog from './projectsImages/MiniBlog.png'
import Porftolio from './projectsImages/Portfolio.png'
import Coffe from './projectsImages/coffee.png'
import Anker from './projectsImages/ankernear.png'

const Projects = () => {




  return (
<section className={styles.projects}>
    


  
<Swiper 
freeMode={true}
    grabCursor={true}
    modules={[FreeMode]}
    className={styles.projects__cards}
    spaceBetween={15}
    slidesPerView={3}

    breakpoints={{
    0:{slidesPerView:1.1},
    500:{
      slidesPerView:1.3,
      spaceBetween:12
    },
    600:{slidesPerView:1.8},
    800:{slidesPerView:2.5},
    1080:{slidesPerView:3.5},
    1400:{slidesPerView:4.3}}}

>  
  <SwiperSlide>
    <a href="https://decoxd.github.io/ankernear/" target='_blank'>  
      <article className={styles.card}>
        <div className={styles.image__box}>
          <img src={Anker} alt="coffe break" className={styles.image}/>
        </div>
        <div className={styles.discription}>E-Commerce Futuristico (em construção)</div>
        <div className={styles.tags__container}>
            <span className={styles.tag}>React</span>
            <span className={styles.tag}>Firebase</span> 
            <span className={styles.tag}>APIs</span>
            <span className={styles.tag}>React-Router</span> 
            
                    </div>
      </article>
      </a>
    </SwiperSlide>


  
  <SwiperSlide>
    <a href="https://decoxd.github.io/cybernetz/" target='_blank'>
      
      <article className={styles.card}>
          <div className={styles.image__box}>
            <img src={MiniBlog} alt="Mini Blog" className={styles.image}/>
          </div>
          <div className={styles.discription}>mini blog</div>
          <div className={styles.tags__container}>
              <span className={styles.tag}>React</span> <span className={styles.tag}>Firebase</span>
          </div>
        </article>
    </a>
    </SwiperSlide>

  <SwiperSlide> 
    <a href="https://decoxd.github.io/-my-portfolio/" target='_blank'>
      <article className={styles.card}>
          <div className={styles.image__box}>
            <img src={Porftolio} alt="Portfolio template" className={styles.image}/>
          </div>
          <div className={styles.discription}>Portfólio(old)</div>
      
          <div className={styles.tags__container}>
              <span className={styles.tag}>HTML</span> <span className={styles.tag}>CSS</span>
          </div>
        </article>
    </a>
    </SwiperSlide>
    


  <SwiperSlide>
    <a href="https://decoxd.github.io/coffee-break/" target='_blank'>  
      <article className={styles.card}>
        <div className={styles.image__box}>
          <img src={Coffe} alt="coffe break" className={styles.image}/>
        </div>
        <div className={styles.discription}>Pagina sobre café</div>
        <div className={styles.tags__container}>
            <span className={styles.tag}>HTML</span> 
            <span className={styles.tag}>CSS</span> 
            <span className={styles.tag}>JS</span> 
        </div>
      </article>
      </a>  
      
      </SwiperSlide>


    </Swiper>
  </section>
  )
}

export default Projects