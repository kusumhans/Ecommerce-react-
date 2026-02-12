import './App.css'
import Footer from './component/Footer/Footer'
import Header from './component/Navbar/Header'
import Home from './pages/home/home'
function App() {

  return (
    <div>
    {/* common header for all pages */}
    <Header 
    expand="md" 
    container="md" 
    />
    <br /><br /><br /><br /><br /><br />
    <Home />

    {/* common footer for all pages */}
    <Footer/>
   
    </div>
  )
} 

export default App
