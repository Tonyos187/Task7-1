import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './Components/NavComponent/NavComponent'
import Hero from './Components/Hero/Hero';
import BrandsLogos from './Components/BrandsLogos/BrandsLogos';
import OurServices from './Components/OurServices/OurServices';
import Requirements from './Components/Requirements/Requirements';
import OurPricing from './Components/OurPricing/OurPricing';
import Testimonials from './Components/Testimonials/Testimonials';
import BlogAndNews from './Components/BlogAndNews/BlogAndNews';
import FooterDiv from './Components/FooterDiv/FooterDiv';
import Footer from './Components/Footer/Footer';




function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
      <NavComponent />
      <Hero />
      <BrandsLogos />
      <OurServices />
      <Requirements />
      <OurPricing />
      <Testimonials />
      <BlogAndNews />
      <Footer />
    </>
  )
}

export default App
