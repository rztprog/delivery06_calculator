import React from 'react';
import './Calculator.css'

class Calculator extends React.Component {
	render() {
		return (
			<div className="Calculator">
			<table cellspacing="1">
			<tbody>
			<tr className="Head">
			<th colSpan="4">0</th>
			</tr>
			<tr className="Grey">
			<td>AC</td>
			<td>+/-</td>
			<td>%</td>
			<td className="Orange">/</td>
			</tr>
			<tr className="LightGrey">
			<td>7</td>
			<td>8</td>
			<td>9</td>
			<td className="Orange">*</td>
			</tr>
			<tr className="LightGrey">
			<td>4</td>
			<td>5</td>
			<td>6</td>
			<td className="Orange">+</td>
			</tr>
			<tr className="LightGrey">
			<td>1</td>
			<td>2</td>
			<td>3</td>
			<td className="Orange">-</td>
			</tr>
			<tr className="LightGrey">
			<td colSpan="2">0</td>
			<td>,</td>
			<td className="Orange">=</td>
			</tr>
			</tbody>
			</table>
			</div>
		);
	}
}


export default Calculator;


