import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import MyAlert from './components/MyAlert';
import BookGallery from './components/BookGallery';

function App() {
  return (
    <div className="App">
      <header>
      <MyNavbar brandName="EpicStore"/>
      <MyAlert />
      </header>
      <main>
      <div className="container mt-4">
      <h1 className="text-center">Book Gallery</h1>
      <BookGallery />
      </div>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
