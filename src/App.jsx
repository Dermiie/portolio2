import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import AppLayout from './ui/AppLayout';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <AppLayout>
              <Route
                index
                element={<Navigate replace to={'home'}></Navigate>}
              />
              <Route path="about" element={<About></About>} />
              <Route path="bookings" element={<Contact></Contact>} />
              <Route path="cabins" element={<Projects></Projects>} />
              <Route path="users" element={<Skills></Skills>} />
              <Route path="*" element={<PageNotFound></PageNotFound>} />
            </AppLayout>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
