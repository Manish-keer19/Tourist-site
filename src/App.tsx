
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './component/layout';
import Navbar from './component/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-800 transition-colors duration-300">

        <Navbar/>
        {/* Add padding top to account for fixed navbar */}
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Layout />} />
  =     
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;