
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import MyFooter from './Pages/Shop/Home/MyFooter'

function App(){ return (
  <>
  <Navbar />
   <Outlet />
   <MyFooter />
  </>
)
 }

  

export default App
