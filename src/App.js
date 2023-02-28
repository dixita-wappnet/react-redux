import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';

function App() {
  return (
    <>
      {/* <h1> Hello Dixita Patel!</h1> */}
      <Navbar />
      <br/>
      <div className="container">
        <Shop />
      </div>
    </>
  );
}

export default App;
