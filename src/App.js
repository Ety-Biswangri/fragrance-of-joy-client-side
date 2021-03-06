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
import MyItems from './components/MyItems/MyItems';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import InventoryDetail from './components/InventoryDetail/InventoryDetail';
import { ToastContainer } from 'react-toastify';
import OurTeam from './components/OurTeam/OurTeam';
import AboutUs from './components/AboutUs/AboutUs';
import Blogs from './components/Blogs/Blogs';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>

        <Route path='/manageInventories' element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>
        }></Route>

        <Route path='/inventory/:id' element={
          <RequireAuth>
            <InventoryDetail></InventoryDetail>
          </RequireAuth>
        }></Route>

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

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>

        <Route path='/aboutUs' element={<AboutUs></AboutUs>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
