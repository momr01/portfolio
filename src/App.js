import {
  About,
  Footer,
  Header,
  Work,
  SoftSkills,
  Experience,
  HardSkills,
  Courses,
} from "./container";
import { Navbar } from "./components";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Experience />
      <HardSkills />
      <SoftSkills />
      <Courses />
      <Footer />
    </div>
  );
};

export default App;
