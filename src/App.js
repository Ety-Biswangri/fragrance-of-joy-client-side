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
import RequireAuth from './components/Login/RequireAuth/RequireAuth';


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

        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>

        <Route path='/addItems' element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }></Route>

        <Route path='/manageItems' element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>
        }></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
