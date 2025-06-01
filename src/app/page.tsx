import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { OurServices } from "./components/Services";
import { projects } from "./components/text/Services";
import AboutUs from "./components/AboutUs";



export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <OurServices items={projects}/>

    </div>
  );
}
