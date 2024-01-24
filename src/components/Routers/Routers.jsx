import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login'
import Daily from '../Daily/Daily';
import Finder from '../Finder/Finder';
import Themes from '../Themes/Themes';
import Membership from '../Membership/Membership';
import Auth from '../Auth/Auth';
import Join from '../Join/Join';

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/auth/email" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/daily" element={<Daily />} />
        <Route path="/finder" element={<Finder />} />
        <Route path="/themes" element={<Themes />} />
        <Route path="/membership" element={<Membership />} />
      </Routes>
    </>
  );
}

export default Routers;
