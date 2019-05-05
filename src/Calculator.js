import React from 'react';
import './Calculator.css'

function sum(a, b){
	return +b + +a;
}

function sub(a, b){
	return +b - +a;
}

function mult(a, b){
	return +b * +a;
}

function div(a, b){
	return +b / +a;
}

function mod(a, b){
	return Math.round(+b / +a);
}

class Calculator extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			result: 0,
			first: [],
			second: [],
			last: [],
			mult: 0,
			div: 0,
			sum: 0,
			sub: 0,
			mod: 0,
		};

		this.acButton = this.acButton.bind(this);
		this.equalButton = this.equalButton.bind(this);
		this.multButton = this.multButton.bind(this);
		this.sumButton = this.sumButton.bind(this);
		this.subButton = this.subButton.bind(this);
		this.divButton = this.divButton.bind(this);
		this.modButton = this.modButton.bind(this);
		this.button0 = this.button0.bind(this);
		this.button1 = this.button1.bind(this);
		this.button2 = this.button2.bind(this);
		this.button3 = this.button3.bind(this);
		this.button4 = this.button4.bind(this);
		this.button5 = this.button5.bind(this);
		this.button6 = this.button6.bind(this);
		this.button7 = this.button7.bind(this);
		this.button8 = this.button8.bind(this);
		this.button9 = this.button9.bind(this);
	}

	button0(event) {
		this.state.first.push("0");   
		this.setState({
			result: this.state.first.join(""),
		});
	}

	button1(event) {
		this.state.first.push("1");   
		this.setState({
			result: this.state.first.join(""),
		});
	}

	button2(event) {
		this.state.first.push("2");   
		this.setState({
			result: this.state.first.join(""),
		});
	}

	button3(event) {
		this.state.first.push("3");   
		this.setState({
			result: this.state.first.join(""),
		});
	}

	button4(event) {
		this.state.first.push("4");   
		this.setState({
			result: this.state.first.join(""),
		});
	}

	button5(event) {
		this.state.first.push("5");   
		this.setState({
			result: this.state.first.join(""),
		});
	}

	button6(event) {
		this.state.first.push("6");   
		this.setState({
			result: this.state.first.join(""),
		});
	}

	button7(event) {
		this.state.first.push("7");   
		this.setState({
			result: this.state.first.join(""),
		});
	}

	button8(event) {
		this.state.first.push("8");   
		this.setState({
			result: this.state.first.join(""),
		});
	}

	button9(event) {
		this.state.first.push("9");   
		this.setState({
			result: this.state.first.join(""),
		});
	}

	acButton() {
		this.setState({
			second: [],
			first: [],
			div: 0,
			mod: 0,
			sub: 0,
			mult: 0,
			sum: 0,
			result: 0,
		});
	}

	equalButton() {
		if(this.state.second.length > 0){
			if(this.state.mult > 0){
				this.setState({
					result: mult(this.state.result, this.state.second.join(""))
				});
			}else if(this.state.sum > 0){
				this.setState({
					result: sum(this.state.result, this.state.second.join(""))
				});
				
			}else if(this.state.sub > 0){
				this.setState({
					result: sub(this.state.first.join(""), this.state.second.join(""))
				});
			}else if(this.state.div > 0){
				this.setState({
					result: div(this.state.first.join(""), this.state.second.join(""))
				});
			}else if(this.state.mod > 0){
				this.setState({
					result: mod(this.state.first.join(""), this.state.second.join(""))
				});
			}
		}

	}

	multButton() {
		if(this.state.first.length > 0){
			this.setState({
				second: this.state.first,
				first: [],
				result: 0
			});
		}
		this.setState({
			mult: 1,
			sum: 0,
			div: 0,
			sub: 0,
			mod: 0,
		});
	}

	sumButton() {
		if(this.state.first.length > 0){
			this.setState({
				second: this.state.first,
				first: [],
				result: 0
			});
		}
		this.setState({
			mult: 0,
			sum: 1,
			div: 0,
			sub: 0,
			mod: 0,
		});
	}

	subButton() {
		if(this.state.first.length > 0){
			this.setState({
				second: this.state.first,
				first: [],
				result: 0
			});
		}
		this.setState({
			mult: 0,
			div: 0,
			sum: 0,
			sub: 1,
			mod: 0,
		});
	}

	divButton() {
		if(this.state.first.length > 0){
			this.setState({
				second: this.state.first,
				first: [],
				result: 0
			});
		}
		this.setState({
			mult: 0,
			div: 1,
			sum: 0,
			sub: 0,
			mod: 0,
		});
	}

	modButton() {
		if(this.state.first.length > 0){
			this.setState({
				second: this.state.first,
				first: [],
				result: 0
			});
		}
		this.setState({
			mult: 0,
			div: 0,
			sum: 0,
			sub: 0,
			mod: 1,
		});
	}

	render() {
		return (
			<div>
			<h1 className="H1">iOS-Like Calculator</h1>
			<div className="Calculator">
			<table cellSpacing="1">
			<tbody>
			<tr className="Head">
			<th colSpan="4">{this.state.result}</th>
			</tr>
			<tr className="Grey">
			<td onClick={this.acButton}>AC</td>
			<td>+/-</td>
			<td onClick={this.modButton}>%</td>
			<td onClick={this.divButton} className="Orange">/</td>
			</tr>
			<tr className="LightGrey">
			<td onClick={this.button7}>7</td>
			<td onClick={this.button8}>8</td>
			<td onClick={this.button9}>9</td>
			<td onClick={this.multButton} className="Orange">x</td>
			</tr>
			<tr className="LightGrey">
			<td onClick={this.button4}>4</td>
			<td onClick={this.button5}>5</td>
			<td onClick={this.button6}>6</td>
			<td onClick={this.subButton} className="Orange">-</td>
			</tr>
			<tr className="LightGrey">
			<td onClick={this.button1}>1</td>
			<td onClick={this.button2}>2</td>
			<td onClick={this.button3}>3</td>
			<td onClick={this.sumButton} className="Orange">+</td>
			</tr>
			<tr className="LightGrey">
			<td onClick={this.button0} colSpan="2">0</td>
			<td>,</td>
			<td className="Orange" onClick={this.equalButton}>=</td>
			</tr>
			</tbody>
			</table>
			</div>
			</div>
		);
	}
}


export default Calculator;


