import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import SecundaryBanner from './components/SecundaryBanner/SecundaryBanner'
import AboutMe from './components/AboutMe/AboutMe'
import RedirectContact from './components/RedirectContact/RedirectContact'
import ProjectWork from './components/ProjectWork/ProjectWork'
import EmailContact from './components/EmailContact/EmailContact'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Header/>
      <Banner/>
      <AboutMe/>
      {/* <SecundaryBanner/> */}
      <h1>Em breve!!</h1>
      {/* 
      <RedirectContact/>
      <ProjectWork/>
      <EmailContact/> */}
      <Footer/>
    </>
  )
}

export default App
