import './assets/css/common.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
        <Home />
        <Footer />
    </div>
  );
}

export default App;
