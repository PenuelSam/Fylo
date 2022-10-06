import Email from "./components/Email";
import Features from "./components/Features";
import Features2 from "./components/Features2";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Productive from "./components/Productive";
import Teams from "./components/Teams";


function App() {
  return (
    <div className="bg-darkBlueMain" >
   <Navbar />
   <Hero />
   <div className="bg-darkBlueMain">
   <Features />
   <Features2 />
   </div>
   <Productive />
   <Teams />
   <Email />
   <Footer />
    </div>
  );
}





export default App;
