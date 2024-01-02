import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  let ob={"color":"white","backgroundColor":"blue"};
  return (
    <div>
       <h1 style={ob}>Hello word!!</h1>
       <h2>Welcome to react application</h2>
       <Header title="this is title1" value="34"></Header>
       <Header title="xxxx"></Header>
       <Footer></Footer>
  </div>
  );
    
  
}

export default App;
