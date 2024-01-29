import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Daily from '../../pages/Daily/Daily';
import Finder from '../../pages/Finder/Finder';
import Themes from '../../pages/Themes/Themes';
import Membership from '../../pages/Membership/Membership';
import Auth from '../../pages/Auth/Auth';
import Join from '../../pages/Join/Join';
import NotFound from '../../pages/NotFound/NotFound';

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/auth/email" element={<Join />} />
        <Route path="/daily" element={<Daily />} />
        <Route path="/finder" element={<Finder />} />
        <Route path="/themes" element={<Themes />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Routers;
