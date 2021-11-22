import React, { Component } from "react";
import calculator from "./Calculator.module.css";

export default class BTMayTinhBoTui extends Component {
	state = {
		prevValue: "",
		currentValue: "",
	};

	digits = [
		"7",
		"8",
		"9",
		"CE",
		"C",
		"4",
		"5",
		"6",
		"/",
		"*",
		"1",
		"2",
		"3",
		"-",
		"=",
		"0",
		".",
		"+",
	];

	renderDigit = () => {
		return this.digits.map((item, index) => {
			return (
				<button
					key={index}
					name={item}
					onClick={(e) => {
						this.handleClick(e.target.name);
					}}>
					{item}
				</button>
			);
		});
	};

	handleClick = (e) => {
		switch (e) {
			case "CE":
				this.clearAll();
				break;
			case "C":
				this.deleteDigit();
				break;
			case "/":
			case "*":
			case "+":
			case "-":
			case ".":
				this.chooseOperator(e);
				break;
			case "=":
				this.result();
				break;
			default:
				this.changeNumber(e);
				break;
		}
	};

	changeNumber = (e) => {
		this.setState({
			prevValue: this.state.currentValue.concat(e),
			currentValue: this.state.currentValue.concat(e),
		});
	};

	chooseOperator = (operator) => {
		const ops = ["/", "*", "+", "-", "."];
		if (
			(this.state.currentValue === "" && ops.includes(operator)) ||
			(ops.includes(operator) &&
				ops.includes(this.state.currentValue.slice(-1)))
		) {
			return;
		}

		this.setState({
			prevValue: this.state.currentValue + operator,

			currentValue: this.state.currentValue + operator,
		});
	};

	deleteDigit = () => {
		this.setState({
			prevValue: this.state.currentValue.slice(0, -1),

			currentValue: this.state.currentValue.slice(0, -1),
		});
		// console.log(this.state.currentValue);
	};

	clearAll = () => {
		this.setState({
			prevValue: "",

			currentValue: "",
		});
		// console.log(this.state.currentValue);
	};

	result = () => {
		try {
			this.setState({
				prevValue: this.state.currentValue,
				currentValue: parseFloat(
					eval(this.state.currentValue).toFixed(4)
				).toString(),
			});
		} catch (err) {
			return;
		}
		// if (this.state.currentValue === "") {
		// 	return;
		// }
		// this.setState({
		// 	prevValue: this.state.currentValue,
		// 	currentValue: parseFloat(
		// 		eval(this.state.currentValue).toFixed(4)
		// 	).toString(),
		// });
	};

	render() {
		return (
			<div
				style={{
					backgroundColor: " #011627",
					width: "100%",
					height: "711px",
				}}
				className='d-flex align-items-center justify-content-center'>
				<div
					className=''
					style={{
						backgroundColor: "#264653",
						width: "350px",
						height: "420px",
						border: "2px solid #0D324D",
						borderRadius: "15px",
						boxShadow: "0 0 15px 5px rgba(255,255,255,0.5)",
					}}>
					<div className={calculator.inputScreen}>
						<p>
							{this.state.prevValue === "" ? "0" : `${this.state.prevValue}`}
						</p>
						<span>
							{this.state.currentValue ? `${this.state.currentValue}` : "0"}
						</span>
					</div>

					<div className={calculator.backgroundGrip}>{this.renderDigit()}</div>
				</div>
			</div>
		);
	}
}
