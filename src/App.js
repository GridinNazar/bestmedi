import { Route, Routes } from 'react-router-dom';
import "./App.scss";
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage'
import Nav from "./components/nav/Nav";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Nav />
    </>
  );
}

export default App;
