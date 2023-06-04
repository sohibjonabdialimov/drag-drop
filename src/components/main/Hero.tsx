import React, { useState } from "react";
import "./style.css";
import people from "../../assets/img/people.png";
import count from "../../assets/img/count.png";
import menu from "../../assets/img/menu.png";
import empty from "../../assets/img/empty.png";



interface Item {
  id: string;
  title: string;
  desc: string;
  bool: boolean;
  people: number;
  count: number;
  img: string;
  name: string;
}

interface Board {
  id: string;
  title: string;
  items: Item[];
}

interface HeroProps {
  boards: Board[];
  setBoards: React.Dispatch<React.SetStateAction<Board[]>>;
}

const Hero: React.FC<HeroProps> = ({ boards, setBoards }) => {
  let [currentBoard, setCurrentBoard] = useState<any>(null);
  let [currentItem, setCurrentItem] = useState<any>(null);

  let num = 0;
  boards.map((board) => {
    num += board.items.length;
    return num;
  });

  // drag over function
  function dragOverFunction(e: any) {
    e.preventDefault();
    if (e.target.className === "item") {
      e.target.style.boxShadow = "0 2px 3px gray";
    }
  }

  // drag leave function

  function dragLeaveFunction(e: any) {
    e.target.style.boxShadow = "none";
    e.target.style.boxShadow = "none";
    
  }

  // drag start function

  function dragStartFunction(board: Board, item: Item) {
    setCurrentBoard(board);
    setCurrentItem(item);
  }

  // drag end function

  function dragEndFunction(e: any) {
    e.target.style.boxShadow = "none";
  }

  // drop function
  function dropFunction(e: any, board: Board, item: Item) {
    e.preventDefault();
    const currentIndex = currentBoard?.items.indexOf(currentItem);
    currentBoard?.items.splice(currentIndex, 1);
    const dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex + 1, 0, currentItem);

    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
    e.target.style.boxShadow = "none";
  }

  // drop card function

  function dropCardFunction(e: any, board: Board) {
    if (board.items.length <= 0) {
      board.items.push(currentItem);
      const currentIndex = currentBoard.items.indexOf(currentItem);
      currentBoard.items.splice(currentIndex, 1);
      setBoards(
        boards.map((b) => {
          if (b.id === board.id) {
            return board;
          }
          if (b.id === currentBoard.id) {
            return currentBoard;
          }

          return b;
        })
      );
    }

    e.target.style.boxShadow = "none";
  }

  return (
    <main className="main">
      <div className="scroll">
        <h2 className="title">
          Заявки <span></span> <p>{num}</p>
        </h2>
        <div className="wrapper">
          {boards.map((board) => (
            <div
              key={board.id}
              onDrop={(e) => dropCardFunction(e, board)}
              onDragOver={(e) => dragOverFunction(e)}
              className="board"
            >
              <div className="board_title">
                {board.title} <span></span> {board.items.length}
              </div>
              <div className="board_content">
                {board.items.length === 0 ? (
                  <div className="empty">
                    <img src={empty} alt="" />
                    <p>Если есть подходящие заявки, перетащите их сюда 🤓</p>
                  </div>
                ) : (
                  board.items.map((item) => (
                    <div
                      key={item.id}
                      className="item"
                      onDragOver={(e) => dragOverFunction(e)}
                      onDragStart={() => dragStartFunction(board, item)}
                      onDragEnd={(e) => dragEndFunction(e)}
                      onDragLeave={(e) => dragLeaveFunction(e)}
                      onDrop={(e) => dropFunction(e, board, item)}
                      draggable={true}
                    >
                      <button className="menu">
                        <img src={menu} alt="" />
                      </button>
                      <h3 className="item_title">{item.title}</h3>
                      <p className="item_desc">
                        {item.desc.length > 28
                          ? item.desc.slice(0, 28) + "..."
                          : item.desc}
                      </p>
                      <div className="item_info_wrap">
                        <button>В приоритете</button>
                        <button>
                          <img src={people} alt="" />
                          <span>{item.people}</span>
                        </button>
                        <button>
                          <img src={count} alt="" />
                          <span>{item.count}</span>
                        </button>
                      </div>
                      <div className="user_info">
                        <img src={item.img} alt="" />
                        <div className="user_desc">
                          <span>Рекруитер</span>
                          <p>{item.name}</p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Hero;
