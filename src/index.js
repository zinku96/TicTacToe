import React from 'react';
import ReactDOM from 'react-dom';
import './Game.css'
class Square extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <button className="square">
        {this.props.value}
      </button>
    )
  }
}

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      map: []
    }
  }
  
  renderSquare(rows,cols){
    var board = [];
    var i,j;
    for(j=1; j<=rows; j++){
      for(i=1; i<=cols; i++){
        board.push(<Square onClick={this.props.value="X"} value={i} />);
        if(i === cols){
          board.push(<br/>);
        }
      }
    }
    return board;
  }
  handleClick(i){

  }
  render(){
    const status = 'Next Player is: ';
    return(
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(8,8)}
        </div>
      </div>
    )
  }
}

class TicTacToe extends React.Component {
  render(){
    return(
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}



ReactDOM.render(
    <TicTacToe />,
  document.getElementById('root')
);
