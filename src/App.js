import Logo from "./components/logos/logo";
import Residences from "./components/residences/residences";
import Value from "./components/value/value";
import Contact from "./components/contact page/contact"
import GetStarted from "./components/getstarted/getstarted";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";


function App() {
  return (
   <div className="App">
    <Header/>
    <Hero/>
    <Logo/>
    <Residences/>
    <Value/>
    <Contact/>
    <GetStarted/>
    <Footer/>

    
   </div> 
  );
}

export default App;
