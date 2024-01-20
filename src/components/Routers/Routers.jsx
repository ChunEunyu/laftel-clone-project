import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Auth/Login'
import Daily from '../Daily/Daily';
import Finder from '../Finder/Finder';
import Themes from '../Themes/Themes';
import Membership from '../Membership/Membership';

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
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
