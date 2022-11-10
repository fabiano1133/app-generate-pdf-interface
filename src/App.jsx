import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import './App.css';
import { Home } from './components/Home/home';

function App() {
  
  return (
    <div>
      <Header />
      <Home/>
      {/* <Form/> */}
    <Footer/>
    </div>
  );
}

export default App;
