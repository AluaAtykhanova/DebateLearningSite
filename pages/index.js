import { Footer, Navbar } from '../components';
import { About, Explore, Hero } from '../sections';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <Footer />
  </div>
);

export default Home;
