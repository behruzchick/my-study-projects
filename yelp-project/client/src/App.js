import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/AuthComponents/Login';
import Register from './Components/AuthComponents/Register';
import Dashboard from './Components/DashboardComponents/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/:id' element={<Dashboard/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
