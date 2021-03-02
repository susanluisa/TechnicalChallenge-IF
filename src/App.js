import './App.css';
import Header from "./components/Header";

function App() {

const fetchBoard = async () => {
  const data = await fetch(`https://api.trello.com/1/actions/{id}/board?key=0471642aefef5fa1fa76530ce1ba4c85&token=9eb76d9a9d02b8dd40c2f3e5df18556c831d4d1fadbe2c45f8310e6c93b5c548`);
  console.log("data",data);
}

fetchBoard();
  return (
    <div className="App">
        <Header />
    </div>
  );
}

export default App;
