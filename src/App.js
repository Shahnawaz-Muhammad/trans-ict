

// import './assets/vendor/aos/aos.css'
// import './assets/vendor/bootstrap/css/bootstrap.min.css'
// import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
// import './assets/vendor/boxicons/css/boxicons.min.css'
// import './assets/vendor/glightbox/css/glightbox.min.css'
// import './assets/vendor/remixicon/remixicon.css'
// import './assets/vendor/swiper/swiper-bundle.min.css'
// import './assets/css/style.css'

// import './App.css';




import Header2 from './layout/Header2';
import Banner from './components/Banner';
import Partner from './components/Partner';
import About from './components/About';
// import FAQ from './components/FAQ';
// import Project from './components/Project';
import SoftwareDevelopment from './components/SoftwareDevelopment'
import Services from './components/Services';
import CyberSecurity from './components/CyberSecurity';
// import CallAction from './components/CallAction';
// import Gellary from './components/Gellary';
import Team from './components/Team';
// import DetailCards from './components/DetailCards';
import FAQ2 from './components/FAQ2';
import Contact from './components/Contact';
import Footer from './layout/Footer';

function App() {
  return (
    <>
      <Header2 />
      <main id="main">
        <Banner />
        <Partner />
        <About />
        {/* <FAQ /> */}
        {/* <Project /> */}
        <Services />
        <SoftwareDevelopment />
        <CyberSecurity />
        {/* <CallAction /> */}
        {/* <Gellary /> */}
        <Team />
        {/* <DetailCards /> */}
        <FAQ2 />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
