import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<NoteList />} />
            <Route path="/note/:id" element={<NoteEditor />} />
            <Route path="/new" element={<NoteEditor />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App; 