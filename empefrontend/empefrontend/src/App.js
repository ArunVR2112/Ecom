import './App.css';
import ListEmployee from './Component/ListEmployee';
import Header from './Component/Header'; // Fixed name to "Header"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeComponent from './Component/EmployeeComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<ListEmployee />}></Route>
          <Route path="/employee" element={<ListEmployee />} />
          <Route path="/add-employee" element={<EmployeeComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
