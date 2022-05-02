import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/SharedPage/Header/Header';
import Footer from './components/SharedPage/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/HomePage/Home/Home';
import NotFound from './components/NotFound/NotFound';
import ManageInventories from './components/ManageInventories/ManageInventories';
import Login from './components/Login/Login/Login';
import Registration from './components/Login/Registration/Registration';
import AddItems from './components/AddItems/AddItems';
import ManageItems from './components/ManageItems/ManageItems';
import MyItems from './components/MyItems/MyItems';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/manageInventories' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/register' element={<Registration></Registration>}></Route>
        <Route path='/myItems' element={<MyItems></MyItems>}></Route>
        <Route path='/addItems' element={<AddItems></AddItems>}></Route>
        <Route path='/manageItems' element={<ManageItems></ManageItems>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
