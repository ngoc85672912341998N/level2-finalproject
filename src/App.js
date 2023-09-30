import logo from './logo.svg';
import './App.css';
import Home_page from './Home_page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo1 from "./Todopage";
import Todo2 from "./Todolist_api";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Phân Trang cho website */}
          <Route path="/home1" element={<Home_page />} />
          <Route exact path="/todo1" element={<Todo1/>} />
          <Route exact path="/todo2" element={<Todo2/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
