import CallToAction from "./components/callToAction/CallToAction";
import Contact from "./components/contact/Contact";
import Content from "./components/content/Content";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Prices from "./components/prices/Prices";
import Team from "./components/team/Team";
import Testimonial from "./components/testimonial/Testimonial";
import Works from "./components/works/Works";

function App() {
  return (
    <>
      <Header/>
      <Content/>
      <Features/>
      <Form/>
      <Testimonial/>
      <CallToAction/>
      <Works/>
      <Team/>
      <Contact/>
      <Prices/>
      <Footer/>
    </>
  );
}

export default App;
