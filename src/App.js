import {Header, Home, Footer} from './components'
import './App.css';
import Wallet from './components/Wallet/Wallet'
function App() {
  return (
    <>
      <div className='App'>
        <Header/>
        <Home/>
        <Footer/>
        <Wallet/>
      </div>
    </>
  );
}

export default App;
