import './App.css'
import Header from './container/Header/Header'
import Navbar from './components/NavBar/Navbar'
import Services from './container/Services/Services'
import Skills from './container/Skills/Skills'
import {dataImagesUing,dataImagesDesign} from './constents/dataImages'
import Footer from './container/Footer/Footer'
function App() {
 

  return (
    <div className='app'>
      <Navbar />
      <div className=''>
      <Header/>
<Services/>
<Skills/>
<Footer/>
      </div>
   
 
    </div>
  )
}

export default App
