import { Footer } from './layout/footer';
import { Header } from './layout/header';
import Home from './components/home';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
