import About from "@/components/About/page";
import Contact from "@/components/Contact/page";
import Galeri from "@/components/Galeri/page";
import Hero from "@/components/Hero/page";
import Menu from "@/components/Menu/page";
import Order from "@/components/Order/page";

const Home = () => {
  return (
    <>
      <Hero />
      <Menu />
      <Order />
      <About />
      <Galeri />
      <Contact />
    </>
  );
};

export default Home;
