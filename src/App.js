import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import  Home  from './Pages/home';
import  Contact  from './Pages/contact';
import  About  from './Pages/about';
import  Layout  from './Components/Layout'

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;

