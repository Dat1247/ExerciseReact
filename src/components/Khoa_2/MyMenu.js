import React, { Component } from "react";
import { connect } from "react-redux";
import { tangGiamSoLuong } from "../../redux/actions/OrderBurgerAction";

class MyMenu extends Component {
	renderItem = () => {
		return this.props.burger.map((item, index) => {
			return (
				<tr key={index}>
					<td>{item.name}</td>
					<td>
						<button
							className='btn btn-danger'
							onClick={() => {
								this.props.tangGiamSoLuong(item.name, false);
							}}>
							-
						</button>
						<span className='mx-2'>{item.amount}</span>
						<button
							className='btn btn-success'
							onClick={() => {
								this.props.tangGiamSoLuong(item.name, true);
							}}>
							+
						</button>
					</td>
					<td>{item.price}</td>
					<td>{(item.amount * item.price).toLocaleString()}</td>
				</tr>
			);
		});
	};

	renderTotalPrice = () => {
		return this.props.burger
			.reduce((totalPrice, item, index) => {
				return (totalPrice += item.price * item.amount);
			}, 0)
			.toLocaleString();
	};

	render() {
		return (
			<div className='col-6'>
				<h3 className='text-success mb-5'>Chọn thức ăn</h3>
				<table className='table table-bordered table-secondary'>
					<thead>
						<tr>
							<th>Thức ăn</th>
							<th></th>
							<th>Đơn giá</th>
							<th>Thành tiền</th>
						</tr>
					</thead>
					<tbody>{this.renderItem()}</tbody>
					<tfoot>
						<tr>
							<th colSpan='3' className='text-right'>
								Thành tiền
							</th>
							<th>{this.renderTotalPrice()}</th>
						</tr>
					</tfoot>
				</table>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		burger: state.OrderBurgerReducer.burger,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		tangGiamSoLuong: (name, tangGiam) => {
			dispatch(tangGiamSoLuong(name, tangGiam));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MyMenu);
