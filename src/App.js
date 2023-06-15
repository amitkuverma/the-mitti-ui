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
import jwtDecode from 'jwt-decode';

function App() {
  const token = localStorage.getItem('token')
  var decodedToken = {}
  if (token) {
    decodedToken = jwtDecode(token);
  }
  console.log(decodedToken);
  return (
    <div className="App">
      { !decodedToken !== {}?
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Login />} />
        </Routes> : <Routes>
          <Route path="/" index element={<Layout />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="user-details" element={<UserDetails />} />
          <Route path="*" element={<Layout />} />
        </Routes>
      }

    </div>
  );
}

export default App;
