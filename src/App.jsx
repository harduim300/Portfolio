import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import SecundaryBanner from './components/SecundaryBanner/SecundaryBanner'
import AboutMe from './components/AboutMe/AboutMe'
import RedirectContact from './components/RedirectContact/RedirectContact'
import ProjectWork from './components/ProjectWork/ProjectWork'
import EmailContact from './components/EmailContact/EmailContact'
import Footer from './components/Footer/Footer'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy'
import CookieConsent from './components/CookieConsent/CookieConsent'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <AboutMe />
              <SecundaryBanner />
              <ProjectWork />
              <EmailContact />
              <CookieConsent />
            </>
          }
        />
        <Route path="/politica-de-privacidade" element={
          <>
            <PrivacyPolicy />
            <CookieConsent />
          </>
        } />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
