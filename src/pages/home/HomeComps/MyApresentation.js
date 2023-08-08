import styles from "../Home.module.css"
import  myFaceImage from  "../images/MyImage-removebg-preview.png"
import myImageBg from  "../images/myimage-fundo.avif"
import {useRef,useEffect,useState} from "react"
import {Link} from "react-router-dom"
const MyApresentation = ({children}) => {

const occupation="Web Developer"
const [writeName,setWriteName] = useState ("Anasd Pinheehc")
const [writeOccupation,setWriteOccupation] = useState ("")


useEffect(()=>{
  
const write = setTimeout (()=> {
console.log('oi')
setWriteName ("André Pinheiro")
},4000)
const enterAndWriteOccupation = setTimeout (()=> {
console.log ('oi')
setWriteOccupation ("<i'm a Web Developer/>")
},6600)

return ()=> {
  clearTimeout (write)
clearTimeout (enterAndWriteOccupation)
}
},[])

  return (
<article className={styles.apresentationContainer}>
  <div className={styles.myImage}>
    <div className={styles.myImageContainer}>
      <img className={`${styles.myImageCircle} ${styles.images}` }src={myImageBg} alt="Circle BG" />
      <img className={`${styles.myImageFace} ${styles.images}`} src={myFaceImage} alt=" André Pinheiro" />
    </div>
  </div>


  <div className={styles.apresentationNameContainer}>
    <div className={styles.typingTextName}>
      <h2 className={styles.apresentationName}>Hello! i'm <span className={styles.nameAnimation} >{writeName}</span></h2>
    </div>
    
    <div className={styles.typingTextOccupation}>
      <h3 className={styles.apresentationOccupation} ><span className={styles.nameAnimation}> {writeOccupation}</span></h3>
    </div>

  <Link to={`/about`}  className={styles.toAboutBtn} >About</Link >

  </div>


   </article>
  )
}

export default MyApresentation