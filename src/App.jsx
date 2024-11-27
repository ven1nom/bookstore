import {Outlet} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App(){
  return(

   <>
   <nav><Navbar/></nav>
   <main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary'>
    <Outlet/> {/* Home,orders etc rahega */}
   </main>
   <footer>Footer</footer>
  </>
)
 
}
export default App
