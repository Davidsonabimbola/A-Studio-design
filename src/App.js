// import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Clients from './Clients/Clients';
import Business from './Business/Business';
import DigitalProduct from './DigitalProduct/DigitalProduct';
import Testimonials from './Testimonials/Testimonials';
import Newsletter from './Newsletter/Newsletter';
import Footer from './Footer/Footer';


function App() {
  return (
    <div className='App'>
      <Header/>
      <Hero/>
      <Clients/>
      <Business/>
      <DigitalProduct/>
      <Testimonials/>
      <Newsletter/>
      <Footer/>
      </div>
  );
}

export default App;
