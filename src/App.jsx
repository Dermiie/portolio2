import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import PageNotFound from "./pages/PageNotFound";
import PageTransition from "./ui/PageTransition";

const AnimatedRoutes = () => {
  const location = useLocation(); // Get current route

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<PageTransition><Home /></PageTransition>} />
          <Route path="about" element={<PageTransition><About /></PageTransition>} />
          <Route path="contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="projects" element={<PageTransition><Projects /></PageTransition>} />
        </Route>
        <Route path="*" element={<PageTransition><PageNotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default App;
