import React from 'react';
import './Calculator.css'

class Calculator extends React.Component {
	render() {
		return (
			<div className="Calculator">
			<table>
			<tbody>
			<tr className="Head">
			<th colSpan="4">0</th>
			</tr>
			<tr>
			<td>AC</td>
			<td>+/-</td>
			<td>%</td>
			<td>/</td>
			</tr>
			<tr>
			<td>7</td>
			<td>8</td>
			<td>9</td>
			<td>*</td>
			</tr>
			<tr>
			<td>4</td>
			<td>5</td>
			<td>6</td>
			<td>+</td>
			</tr>
			<tr>
			<td>1</td>
			<td>2</td>
			<td>3</td>
			<td>-</td>
			</tr>
			<tr>
			<td colSpan="2">0</td>
			<td>,</td>
			<td>=</td>
			</tr>
			</tbody>
			</table>
			</div>
		);
	}
}


export default Calculator;


