import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/template-parts/NavMenu/Header'
import {AppRouter} from './router/Routes'
import { Footer } from './components/template-parts/Footer'

function App() {
  




  return (
    <>
   
      <BrowserRouter>
        <Header/>
        
        <AppRouter/>
        <Footer/>
      </BrowserRouter>


    </>
  )
}

export default App
