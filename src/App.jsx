import React from 'react';
import Header from './components/Header';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Video from './pages/Video';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <main className="main_page">
          <Sidebar />
          <Routes>
            <Route path="/" >
              <Route index element={<Home/>}/>
              <Route path="Search/:searchTerm" element={<SearchPage/>} />
              <Route path="video">
                <Route path=":videoId" element={<Video/>}/>
              </Route>
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>

  );
}

export default App;
