// import { Footer } from './layout/footer';
// import { Header } from './layout/header';
import { Home } from './components/home';
import { Blogs } from './components/blogs';
import { Contact } from './components/contact';
import { NoPage } from './components/no-page';
import { Layout } from './layout/layout';
import { Login } from './components/login';
import { Register } from './components/register';
import { UserDetails } from './components/userDetails';
import './App.scss';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Layout />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="user-details" element={<UserDetails />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
