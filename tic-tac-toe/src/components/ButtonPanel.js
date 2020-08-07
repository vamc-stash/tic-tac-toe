import React, {Component} from 'react';
import Button from './Button.js';

class ButtonPanel extends Component {

	renderButton(i) {
		let myStyle;
		if(this.props.winnerPattern && this.props.winnerPattern.includes(i)) {
			myStyle = {
				color: 'white'
			}
		}

		return <Button style={myStyle} value={this.props.matrix[i]} onClick={()=>this.props.onClick(i)}/>
	}

	createBoard() {

		let board = []
		for(let i=0; i<9; i=i+3) {
			let row = []
			for(let j=i; j<i+3; j++) {
					row.push(<td>{this.renderButton(j)}</td>)
			}
			board.push(<tr>{row}</tr>)
		}
		return board;
	}

	render(){

		return(
			<table>
			{this.createBoard()}
			</table>
			);
	}
}

export default ButtonPanel;


