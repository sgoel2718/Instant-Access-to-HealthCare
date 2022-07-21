import "./App.css";
import Home from "./components/Home/Home";
import Services from "./components/HomePage/Services";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <Services />
      <Footer/>
    </div>
  );
}

export default App;
