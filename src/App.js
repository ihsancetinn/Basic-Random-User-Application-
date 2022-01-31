import './App.css';
import Header from './components/header/Header';
import Footer from "./components/footer/Footer";
import UserList from './components/content/UserList.jsx';

function App() {
  return (
    <div className="App">


      <Header />
      <UserList />
      <Footer />
    </div>
  );
}

export default App;

