import Navbar from './components/Navbar';
import Featured from './components/Featured/Featured';
import Houses from './components/Houses/Houses';
import Carousel from './components/Carousel/Carousel';
import Storage from './components/Storage/Storage';
import SearchedGrouped from './components/SearchedGrouped/SearchedGrouped';
import LadyStorage from './components/LadyStorage/LadyStorage';
import LearningSection from './components/LearningSection/LearningSection';
import Query from './components/Queries/Queries';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Featured header='Featured Self Storage'/>
      <Houses />
      <Carousel />
      <Featured header='Active Listing Self Storages'/>
      <SearchedGrouped />
      <Storage />
      <LadyStorage />
      <LearningSection />
      <Query />
    </div>
  );
}

export default App;
