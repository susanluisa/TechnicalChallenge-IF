import './App.css';
import Header from "./components/Header";
import TrelloClient from "react-trello-client";


function App() {

const fetchBoard = async () => {
  const data = await fetch(`https://api.trello.com/1/actions/{id}/board?key=0471642aefef5fa1fa76530ce1ba4c85&token=9eb76d9a9d02b8dd40c2f3e5df18556c831d4d1fadbe2c45f8310e6c93b5c548`);
  console.log("data",data);
}

fetchBoard();
  return (
    <div className="App">
      nuevo
      <Header />
      <TrelloClient
            apiKey="2d6549ffae8065bc4354b8abcb14a28e" // Get the API key from https://trello.com/app-key/
            clientVersion={1} // number: {1}, {2}, {3}
            apiEndpoint="https://api.trello.com" // string: "https://api.trello.com"
            authEndpoint="https://trello.com" // string: "https://trello.com"
            intentEndpoint="https://trello.com" // string: "https://trello.com"
            authorizeName="React Trello Client" // string: "React Trello Client"
            authorizeType="popup" // string: popup | redirect
            authorizePersist={true}
            authorizeInteractive={true}
            authorizeScopeRead={false} // boolean: {true} | {false}
            authorizeScopeWrite={true} // boolean: {true} | {false}
            authorizeScopeAccount={true} // boolean: {true} | {false}
            authorizeExpiration="never" // string: "1hour", "1day", "30days" | "never"
            authorizeOnSuccess={() => console.log('Login successful!')} // function: {() => console.log('Login successful!')}
            authorizeOnError={() => console.log('Login error!')} // function: {() => console.log('Login error!')}
            autoAuthorize={false} // boolean: {true} | {false}
            authorizeButton={true} // boolean: {true} | {false}
            buttonStyle="metamorph" // string: "metamorph" | "flat"
            buttonColor="green" // string: "green" | "grayish-blue" | "light"
            buttonText="Login with Trello" // string: "Login with Trello"
        />
    </div>
  );
}

export default App;
