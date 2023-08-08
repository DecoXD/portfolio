//images
import myImage from '../../assets/images/about_image.png'
import Images from '../../assets/images/Images'
//css
import styles from "./About.module.css"
const About = () => {






  return (
<section className={styles.about}>

  <div className={styles.personalInfo}>

    <div className={styles.imageContainer}>

        <div className={styles.imageBox}>
          <img src={myImage} alt="" className={styles.image} />
        </div>
        <div className={styles.details}>
            <p className="f-medium bold">André pinheiro</p>
            <p className="lowOpacity bold f-small">desenvolvedor Full Stack</p>
          </div>  
       
      </div>
    <hr />

    <div className={`${styles.obj} f-small lowOpacity bold`}>
      <h3 >Sobre mim</h3>

      <p> Me chamo André Pinheiro, tenho 24 anos e sou estudante de Ciências da Computação na Estácio. Tenho como objetivo adquirir conhecimento e experiência em uma empresa de tecnologia inovadora, onde possa aplicar minhas habilidades e paixão pela tecnologia para desenvolver soluções criativas e impactantes.</p>
    </div>
    <hr />
    <div className={`${styles.obj} f-small`}>
        <div className={styles.contacts}>
          
            <div className="bold lowOpacity"><a href="https://github.com/DecoXD" target='_blank'><i className="bi bi-github icon-blue f-medium"></i> <span> DecoXD</span> </a></div>
            <div className="bold lowOpacity"><a href="https://www.instagram.com/deco.xd/" target='_blank'><i className="bi bi-instagram icon-blue f-medium"></i> <span> @deco.xd</span> </a></div>
            <div className="bold lowOpacity"><a href="https://www.linkedin.com/in/andre-pinheiro-54a5a1237/" target='_blank'><i className="bi bi-linkedin icon-blue f-medium"></i> <span> André Pinheiro</span> </a></div>
            <div className="bold lowOpacity"><a href="https://leetcode.com/sfildr/" target='_blank'><i className="bi bi-code icon-blue f-medium"></i> <span>Leet Code</span> </a></div>

        </div>
    </div>
    <hr />
    <div className={`${styles.obj} f-small lowOpacity bold`}>
        <div className={styles.contacts}>
            <p>
              <i className="bi bi-envelope icon-blue f-medium"></i> <span> andre.devfront@outlook.com</span></p>
            <p >
              <i className="bi bi-phone icon-blue f-medium"></i> <span> (71) 9 9607-6480</span></p>
            <p><i className="bi bi-geo-alt icon-blue f-medium"></i> <span> Alagoinhas - BA</span></p>

        </div>
    </div>
    <hr />




  </div>
 
    <div className={styles.codeLangs}>
      <h3> skills <i className="bi bi-code"></i></h3>
      <div className={styles.skillList}>
       
        <div className={styles.lang}><img className={styles.skillImage
        } src={Images.firebase} alt="firebase" /></div>
        <div className={styles.lang}> <img className={styles.skillImage
        } src={Images.css} alt="css" /></div>
        <div className={styles.lang}> <img className={styles.skillImage
        } src={Images.html} alt="html" /></div>
        <div className={styles.lang}> <img className={styles.skillImage
        } src={Images.js} alt="js" /></div>
        <div className={styles.lang}> <img className={styles.skillImage
        } src={Images.react} alt="react" /></div>
        <div className={styles.lang}> <img className={styles.skillImage
        } src={Images.node} alt="node" /></div>
        <div className={styles.lang}> <img className={styles.skillImage
        } src={Images.mysql} alt="mysql" /></div>
        <div className={styles.lang}> <img className={styles.skillImage
        } src={Images.php} alt="php" /></div>
      </div>
    </div>
    <div className={styles.personalSkills}>
      <h3>personal Skills</h3>
      <ul className={styles.list}>
        <li className={styles.listItem}><span style={{width: '97%'}} className={styles.progress}>comprometimento</span></li>
        
        <li className={styles.listItem}><span style={{width: '98%'}} className={styles.progress}>trabalho em equipe</span></li>
        <li className={styles.listItem}><span style={{width: '94%'}} className={styles.progress}>Resiliencia</span></li>
        <li className={styles.listItem}><span style={{width: '96%'}} className={styles.progress}>Facilidade de aprendizagem</span></li>
      </ul>

    </div>
 


    
    
</section>
  )
}

export default About