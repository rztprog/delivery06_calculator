import React from 'react';
import './Calculator.css'

class Calculator extends React.Component {
	render() {
		return (
			<div className="Calculator">
				<div className="item-a">0</div>
				<div>AC</div>
				<div>+-</div>
				<div>%</div>
				<div>/</div>
				<div>7</div>
				<div>8</div>
				<div>9</div>
				<div>*</div>
				<div>4</div>
				<div>5</div>
				<div>6</div>
				<div>-</div>
				<div>1</div>
				<div>2</div>
				<div>3</div>
				<div>+</div>
				<div>0</div>
				<div>0</div>
				<div>,</div>
				<div>=</div>
			</div>
		);
	}
}


export default Calculator;

