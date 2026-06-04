import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import Styles from "./components/Styles";
import Gallery from "./components/Gallery";
import Process from "./components/Process";
import Materials from "./components/Materials";
import Quote from "./components/Quote";
import Footer from "./components/Footer";
import MobileBar from "./components/MobileBar";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Trust />
        <Styles />
        <Gallery />
        <Process />
        <Materials />
        <Quote />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
