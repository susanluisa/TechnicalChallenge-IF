import { React } from 'react';
import Main from './components/Main';
import Header from "./components/Header";
import './App.css';
import TrelloClient from "react-trello-client";

function App() {

  return (
    <div className="App">
      <Header />
      <Main />
      {/* <TrelloClient
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
        /> */}
    </div>
  );
}

export default App;
