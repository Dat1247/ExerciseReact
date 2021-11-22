import React, { Component } from "react";
import { connect } from "react-redux";

class MyBurger extends Component {
	renderItem = (name) => {
		let index = this.props.burger.findIndex((item) => item.name === name);
		let big = [];
		for (let i = 0; i < this.props.burger[index].amount; i++) {
			big.push(<div className={name} key={i}></div>);
		}

		return big;
	};
	render() {
		return (
			<div className='col-6'>
				<h3 className='mb-5 text-danger'>Bánh burger của bạn</h3>
				<div className='breadTop'></div>
				{this.renderItem("salad")}
				{this.renderItem("cheese")}
				{this.renderItem("beef")}

				<div className='breadBottom'></div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		burger: state.OrderBurgerReducer.burger,
	};
};

export default connect(mapStateToProps)(MyBurger);
