import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Navbar } from '../../../assets/components/layout/navbar'
import { Footer } from '../../../assets/components/layout/footer'
import { HomeDesk } from '../Home'
import { AboutDesk } from '../About'
import { ContactDesk } from '../Contact'

export function RoutesDesktop() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeDesk />} />
          <Route path="/contact" element={<ContactDesk />} />
          <Route path="/about" element={<AboutDesk />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
