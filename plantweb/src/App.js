import logo from './logo.svg';
import './App.css';

import {Header} from "./component/header";
import {Login} from "./page/login/login";
import {Main} from "./page/main/main";
import {ShowSearchList} from "./page/showSearchList/showSearchList"
import {ShowDetails} from "./page/showDetails/showDetails"
import {MyPage} from "./page/myPage/myPage"

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
     <BrowserRouter>
        <Routes>
           <Route exact path="/" element ={<Main/>} />
           <Route exact path="/login" element ={<Login/>} />
           <Route exact path="/searchList" element ={<ShowSearchList/>} />
           <Route exact path="/details" element ={<ShowDetails/>} />
           <Route exact path="/myPage" element ={<MyPage/>} />
        </Routes>
     </BrowserRouter>
  );
 
}

const App = () => {
  return Router();
};

export default App;
