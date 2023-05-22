import LandingPage from '../components/landpage/LandingPage';
import Header from './../common/header/Header';
import Footer from './../common/footer/Footer';
import Navbar from './../common/navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
};

export default Home;