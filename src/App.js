import {Header, Home, Footer} from './components'
import './App.css';
import Convert from './components/Wallet/convertDevise';
function App() {
  return (
    <>
      <div className='App'>
        <Header/>
        <Home/>
        <Footer/>
        <Convert/>
      </div>
    </>
  );
}

export default App;
