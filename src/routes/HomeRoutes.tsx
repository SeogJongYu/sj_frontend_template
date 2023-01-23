import React from 'react';
import {Route, Routes} from 'react-router-dom';

import LoginRequiredRoute from '~/components/LoginRequiredRoute';
import Home from '~/pages/home/Home';

const HomeRoutes = () => {
  return (
    <LoginRequiredRoute>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </LoginRequiredRoute>
  );
};

export default HomeRoutes;
