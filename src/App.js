
import './App.css';
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom"
import Home from './pages/home/Home';
import About from './pages/about/About';
import Header from './components/header/Header';
import Projects from './pages/projects/Projects';
import Footer from './components/Footer/Footer';
function App() {
  
  return (
<div className="App"> 
  <BrowserRouter>
  <Header/>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/projects' element={<Projects/>}/>
  <Route path='*' element= {<Navigate to={'/'}/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
</div>
  );
}

export default App;
