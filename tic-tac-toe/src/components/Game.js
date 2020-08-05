import React, {Component} from 'react';
import ButtonPanel from './ButtonPanel';

function calculateWinner(matrix) {
	const winningPattern = [
 [0,1,2],
 [3,4,5],
 [6,7,8],
 [0,3,6],
 [1,4,7],
 [2,5,8],
 [0,4,8],
 [2,4,6]
 ];

 for(let i=0; i<winningPattern.length; i++) {
  const [a,b,c] = winningPattern[i]
  if(matrix[a] && matrix[a] === matrix[b] && matrix[b] === matrix[c]) {
   return [matrix[a], winningPattern[i]];
  }
 }
 return [null, null];
}

const initialState = {
 playerX: false,
 stepNumber: 0,
 history: [
 {matrix: Array(9).fill(null)}
 ]
}

class Game extends Component {

 state = initialState;

 handleClick = (i) => {
 	const history = this.state.history.slice(0, this.state.stepNumber+1);
 	const current = history[history.length-1]
 	const matrix = current.matrix.slice()
 	const [winner, winnerPattern] = calculateWinner(matrix)
 	if(winner || matrix[i]) {
 		return;
 	}

 	matrix[i] = this.state.playerX?'X':'O'

 	this.setState({
 		history: history.concat({matrix:matrix}),
 		playerX: !this.state.playerX,
 		stepNumber: history.length
 	})
 }

 jumpTo = (step) => {
 	this.setState({
 		stepNumber: step,
 		playerX: (step%2) !== 0

 	})
 }

 resetState = () => {
 	this.setState(initialState)
 }

 render(){
  const history = this.state.history;
  const current = history[this.state.stepNumber]
  const [winner, winnerPattern] = calculateWinner(current.matrix)
  let moves;
  if(winner || (winner == null && this.state.stepNumber === 9)) {
  	moves = <li>
   <button onClick={()=>{this.resetState()}}>Restart the Game</button>
   </li>
  } else {
  	moves = history.map((stage, move) => {
    const desc = move? "Go to stage #"+move : "Start stage #0"
    return(
     <li key={move}>
     <button onClick={()=>{this.jumpTo(move)}}>
     {desc}
     </button>
     </li>
     )
   });
  }
  

  let status;
  if(winner) {
  	status = "Winner is Player" + winner
  	
  } else if(winner == null && this.state.stepNumber === 9) {
  	status = "Draw Match"
  } else {
  	status = "Player "+ (this.state.playerX? 'X': 'O') + "'s turn"
  }

  return (
   <div className="App">
   <div className="game-status">
   {status}
   </div>
   <ButtonPanel matrix={current.matrix} onClick={this.handleClick} winnerPattern={winnerPattern}/>
   <div className="game-info">
   <ul>{moves}</ul>
   </div>
   </div>
   );
  }
 }

 export default Game;
