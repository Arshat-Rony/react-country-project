
import './App.css';
import Allproduct from './components/Allproduct/Allproduct';
import Header from './components/Header/Header';
import { useState } from 'react';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import TodaysDeal from './components/TodaysDeal/TodaysDeal';
AOS.init();

function App() {
  const [count, setCount] = useState(0)
const setCart = () => {
    const currentNumber = count + 1;
    setCount(currentNumber)
}
  return (
    <div className="App">
         <Header count={count}></Header>
         <Hero></Hero>
         <About></About>
      <Allproduct setCart={setCart}></Allproduct>
      <TodaysDeal></TodaysDeal>
      <Footer></Footer>
   
    </div>
  );
}

export default App;
