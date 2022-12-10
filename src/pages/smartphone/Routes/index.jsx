import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Navbar } from '../../../assets/components/layout/navbar'
import { Footer } from '../../../assets/components/layout/footer'
import { HomeSmart } from '../Home'
import { AboutSmart } from '../About'
import { ContactSmart } from '../Contact'

export function RoutesSmartphone() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeSmart />} />
          <Route path="/contact" element={<ContactSmart />} />
          <Route path="/about" element={<AboutSmart />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
