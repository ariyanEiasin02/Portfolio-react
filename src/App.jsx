import './App.css'
import BackTop from './Component/BackTop/BackTop'
import Navbar from './Component/Navbar/Navbar'
import Banner from './Component/Banner/Banner'
import Features from './Component/Features/Features'
import About from './Component/About/About'
import Counter from './Component/Counter/Counter'
import Portfolio from './Component/Portfolio/Portfolio'
import Skills from './Component/Skills/Skills'
import Service from './Component/Service/Service'
import Works from './Component/Works/Works'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
function App() {
  return (
    <div className='overflow-hidden'>
        <BackTop></BackTop>
        <Navbar></Navbar>
        <Banner></Banner>
        <Features></Features>
        <About></About>
        <Counter></Counter>
        <Portfolio></Portfolio>
        <Skills></Skills>
        <Service></Service>
        <Works></Works>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  )
}

export default App
