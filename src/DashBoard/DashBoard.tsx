import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.tsx';
import Profile from './Profile.tsx';

import Orders from './Order.tsx'

const DashBoard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route path="profile" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />

            {/* other routes */}
          </Route>
        </Routes>
      </main>
    </div>
  );
};

const DashboardLayout = () => (
  <div className="flex flex-col">
    <h1 className="text-2xl font-bold p-4">Dashboard</h1>
    <Outlet />
  </div>
);

export default DashBoard;
