import { Route, Routes } from 'react-router-dom';
import React from "react";

import AllMeetUpsPage  from './pages/AllMeetUpsPage'
import Navbar from './components/Navbar';
import FavoritesPage from './pages/FavoritesPage'
import NewMeetupsPage from './pages/NewMeetupsPage'
import Error from './pages/Error'

import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<AllMeetUpsPage/>} />
        <Route path='/favorites' element={<FavoritesPage/>} />
        <Route path='/new-meetup' element={<NewMeetupsPage/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
