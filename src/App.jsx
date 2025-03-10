import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import AppLayout from './ui/AppLayout';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout></AppLayout>}>
          <Route index element={<Navigate replace to={'home'}></Navigate>} />
          <Route path="home" element={<Home></Home>} />
          <Route path="about" element={<About></About>} />
          <Route path="contact" element={<Contact></Contact>} />
          <Route path="projects" element={<Projects></Projects>} />
          <Route path="skills" element={<Skills></Skills>} />
        </Route>
        <Route path="*" element={<PageNotFound></PageNotFound>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
