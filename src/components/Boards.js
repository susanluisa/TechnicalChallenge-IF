import React, {useState, useEffect} from 'react';
import './Boards.css';

function Boards() {

  useEffect( () => {
    fetchBoard();
  }, []);

  const [boards, setBoards] = useState({});
  const fetchBoard = async () => {
    const data = await fetch(`https://api.trello.com/1/members/me/boards?fields=name,url&key=2d6549ffae8065bc4354b8abcb14a28e&token=687e0ea9237de53d5fe2aa084efefa2c77e10c4c2fdbcde2a7d2d285e6c56309`);
    const boards = await data.json();
    boards.forEach(board => {
      setBoards(board);
    });
  }
  console.log(boards);
  const title = boards.forEach(board=>{
    return(
      <div className="board__content">
        <h2>{board.name}</h2>
      </div>)
  })
 
  return (title);
}

export default Boards;
