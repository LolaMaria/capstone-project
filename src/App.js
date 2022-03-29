import data from './components/data.js';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookmarkPage from './pages/BookmarkPage';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage data={data} />} />
        <Route path="/bookmark" element={<BookmarkPage />} />
      </Routes>
    </div>
  );
}
