import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { TermsOfService } from "./pages/TermsOfService";
import { Experiences } from "./pages/Experiences";
import { About } from "./pages/About";
import { Partners } from "./pages/Partners";
import { Referrals } from "./pages/Referrals";
import { Music } from "./pages/Music";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="experiences/music" element={<Music />} />
          <Route path="about" element={<About />} />
          <Route path="partners" element={<Partners />} />
          <Route path="referrals" element={<Referrals />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
