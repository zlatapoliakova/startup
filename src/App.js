import CallToAction from "./components/callToAction/CallToAction";
import Content from "./components/content/Content";
import Features from "./components/features/Features";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
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
    </>
  );
}

export default App;
