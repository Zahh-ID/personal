import { Routes, Route } from "react-router-dom";
import { SmoothScroll } from "./components/layout/smooth-scroll";
import { Preloader } from "./components/layout/preloader";
import { FullscreenMenu } from "./components/layout/fullscreen-menu";
import { CTA } from "./components/sections/cta";
import { Footer } from "./components/layout/footer";
import { ScrollToTop } from "./components/layout/scroll-to-top";
import { HomePage } from "./pages/home";
import { WorkPage } from "./pages/work";
import { AboutPage } from "./pages/about";
import { NotFoundPage } from "./pages/not-found";

function App() {
  return (
    <div className="bg-pattern-fixed">
      <SmoothScroll>
        <Preloader />
        <FullscreenMenu />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <CTA />
        <Footer />
      </SmoothScroll>
    </div>
  );
}

export default App;
