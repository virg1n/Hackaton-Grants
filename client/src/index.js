import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import ViewSingleProject from './pages/ViewSingleProject';
import CreateProjectPage from './pages/CreateProjectPage';
import RegisterPage from './pages/RegisterPage';
import LoginPageAdmin from './pages/LoginPageAdmin';
import LoginPagejuri from './pages/LoginPagejuri';
import ViewAllProject from './pages/ViewAllProject';
import MainPageUser from './pages/MainPageUser';
import MainPageJuri from './pages/MainPageJuri';
import MainPageAdmin from './pages/MainPageAdmin';
import ViewAllProjectAdmin from './pages/ViewAllProjectAdmin';
import ViewSingleProjectAdmin from './pages/ViewSingleProjectAdmin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserProjectsPage from './pages/UserProjectsPage';
import ViewSingleProjectUser from './pages/ViewSingleProjectUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/userMain' element={<MainPageUser/>}/>
        <Route path='/juri' element={<MainPageJuri/>}/>
        <Route path='/admin' element={<MainPageAdmin/>}/>
        <Route path='/user/login' element={<LoginPage/>}/>
        <Route path='/juri/viewSingleProject/:id' element={<ViewSingleProject/>}/>
        <Route path='/user/createProject' element={<CreateProjectPage/>}/>
        <Route path='/user/regiter' element={<RegisterPage/>}/>
        <Route path='/admin/login' element={<LoginPageAdmin/>}/>
        <Route path='/juri/login' element={<LoginPagejuri/>}/>
        <Route path='/user/my-projects' element={<UserProjectsPage/>}/>
        <Route path='/juri/view-all-projects' element={<ViewAllProject/>}/>
        <Route path='/admin/view-all-projects' element={<ViewAllProjectAdmin/>}/>
        <Route path='/admin/viewSingleProject/:id' element={<ViewSingleProjectAdmin/>}/>
        {/* <Route path='/admin/viewSingleProject' element={<ViewSingleProjectAdmin/>}/> */}
        <Route path='/user/viewSingleProject' element={<ViewSingleProjectUser/>}/>
      </Routes>

      <ToastContainer position="bottom-right"/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);