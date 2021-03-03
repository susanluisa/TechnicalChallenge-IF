import React, {useState, useEffect} from 'react';
import './Main.css';

function Boards() {

  useEffect( () => {
    fetchBoard();
  }, []);

  const [board, setBoard] = useState([]);
  const fetchBoard = async () => {
    const data = await fetch(`https://api.trello.com/1/members/me/boards?fields=name,url&key=2d6549ffae8065bc4354b8abcb14a28e&token=687e0ea9237de53d5fe2aa084efefa2c77e10c4c2fdbcde2a7d2d285e6c56309`);
    const boards = await data.json();
    console.log(boards[0].name);

    // boards.forEach(board => {
    //   console.log(board);
    // });
  }

  return (
    <div className="">
      <div className="">
      </div>
    </div>
  );
}

export default Boards;
