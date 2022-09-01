
import { BrowserRouter, Route, Routes, Redirect, Navigate } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Content } from './components/Content';
import { Home, Resume, Projects, Contact } from './components/Pages'

function App() {
  return (
    <div className="font-mono">
    <BrowserRouter>
    <div className="fixed w-1/4 h-full p-10 phone:w-screen phone:p-0 phone:h-fit phone:relative">
      <NavBar />
    </div>
    <div className="w-3/4 left-1/4 h-full relative phone:w-full phone:left-0">
      <Content>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/home" />}></Route>
          </Routes>
        </Content>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
