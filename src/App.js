/*
import logo from './logo.svg';
import './App.css';
*/
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Shop} from './components/Shop';

function App() {
  console.log("App started")
  return (
    <>
      <Header />
        <Shop />
      <Footer /> 
    </>
  );
}

export default App;
