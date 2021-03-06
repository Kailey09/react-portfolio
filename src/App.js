import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutme from './pages/aboutMe';
import Projects from './pages/projects';
import Resume from './pages/resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
