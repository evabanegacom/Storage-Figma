import Navbar from './components/Navbar';
import Featured from './components/Featured/Featured';
import Houses from './components/Houses/Houses';
import Carousel from './components/Carousel/Carousel';
import SearchedGrouped from './components/SearchedGrouped/SearchedGrouped';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Featured header='Featured Self Storage'/>
      <Houses />
      <Carousel />
      <Featured header='Active Listing Self Storages'/>
      <SearchedGrouped />
    </div>
  );
}

export default App;
