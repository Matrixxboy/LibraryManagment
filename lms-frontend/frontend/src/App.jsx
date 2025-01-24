import './App.css';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from './Components/navbar/Navbar';
import Home from './pages/home/Home';
import Book from './pages/books/Book';
import Addbooks from './pages/AddBook/Addbooks'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route excet path='/' element={<Home />} />
        <Route path='/Book' element={<Book />} />
        <Route path='/AddBooks' element={<Addbooks />} />
      </Routes>
    </Router>
  );
}

export default App;
