import './App.css';
import Header from './components/header';
import PeticionApi from './components/peticionfetch';

function App() {
  return (
    <>
      <Header />
      <div className="container-principal">
        <PeticionApi />
      </div>
    </>
  );
}

export default App;
