// import { Footer } from './layout/footer';
// import { Header } from './layout/header';
import { Home } from './components/home';
import { Blogs } from './components/blogs';
import { Contact } from './components/contact';
import { NoPage } from './components/no-page';
import { Layout } from './layout/layout';
import { Login } from './components/login';
import { Register } from './components/register';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Layout />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
