import Home from "./components/Home";
import ProgressBar from "./components/ProgressBar";
import Quiz from "./components/Quiz";
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
