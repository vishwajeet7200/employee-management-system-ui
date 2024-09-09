
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import Navbar from './components/Navbar';
import EmployeeList from './components/EmployeeList';
import ErrorPage from './components/ErrorPage';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
 
  return (
    <> 
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<EmployeeList/>}/>
          <Route path='/' element={<EmployeeList/>}></Route>
          <Route path='/allEmployee' element={<EmployeeList/>}></Route>
          <Route path='/addEmployee' element={<AddEmployee/>}></Route>
          <Route path='/errorPage' element={<ErrorPage/>}></Route>
          <Route path='/editEmployee/:id' element={<UpdateEmployee/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
