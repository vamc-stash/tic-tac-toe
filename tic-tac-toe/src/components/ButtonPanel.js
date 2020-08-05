import React, {Component} from 'react';
import Button from './Button.js';

class ButtonPanel extends Component {

	renderButton(i) {
		let myStyle;
		if(this.props.winnerPattern && this.props.winnerPattern.includes(i)) {
			myStyle = {
				backgroundColor: '#0066cc',
				color: 'white'
			}
		}

		return <Button className="col-4" style={myStyle} value={this.props.matrix[i]} onClick={()=>this.props.onClick(i)}/>
	}

	createBoard() {

		let board = []
		for(let i=0; i<9; i=i+3) {
			let row = []
			for(let j=i; j<i+3; j++) {
				row.push(this.renderButton(j))
			}
			board.push(<div className="row">{row}</div>)
		}
		return board;
	}

	render(){

		return(
		<div className="container">
		<div className="col-4"></div>
		<div className="col-4">{this.createBoard()}</div>
		<div className="col-4"></div>
		</div>
		);
	}
}

export default ButtonPanel;


