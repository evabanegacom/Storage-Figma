import Navbar from './components/Navbar';
import Featured from './components/Featured/Featured';
import Houses from './components/Houses/Houses';
import Carousel from './components/Carousel/Carousel';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Featured />
      <Houses />
      <Carousel />
      <Featured />
    </div>
  );
}

export default App;
