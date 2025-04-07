import './App.css';
import Home from './components/Home';
import Greeting from './Greeting';

function App() {
  return (
    <>
      <h1>My app</h1>
      <Greeting name="orsto" />
      <Home />
    </>
  );
}

export default App;
