import './App.css'
import Header from './container/Header/Header'
import Navbar from './components/NavBar/Navbar'
import Services from './container/Services/Services'

function App() {
 

  return (
    <div className='app'>
      <Navbar />
      <div className=''>
      <Header/>
<Services/>
      </div>
   
 
    </div>
  )
}

export default App
