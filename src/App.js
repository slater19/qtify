import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import SongsTab from "./SongsTab/SongsTab";
import NewAlbum from "./NewAlbum/NewAlbum";
import TopAlbum from "./TopAlbum/TopAlbum";


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
  <TopAlbum/>
  <hr/>
  <NewAlbum/>
  <hr/>
  <SongsTab/>
     </div>
  );     
}

export default App;
