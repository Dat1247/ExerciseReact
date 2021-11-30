import React, { Component } from "react";
import { connect } from "react-redux";
import {
	suaNguoiDung,
	xoaNguoiDung,
} from "../redux/actions/QuanLyNguoiDungAction";

class TableDanhSach extends Component {
	renderListNguoiDung = () => {
		return this.props.listNguoiDung.map((user, index) => {
			return (
				<tr key={index}>
					<td>{index + 1}</td>
					<td>{user.account}</td>
					<td>{user.hoTen}</td>
					<td>{user.password}</td>
					<td>{user.email}</td>
					<td>{user.phone}</td>
					<td>{user.loaiNguoiDung === "1" ? "Khách hàng" : "Quản trị"}</td>
					<td>
						<button
							className='btn btn-primary'
							onClick={() => {
								this.props.suaNguoiDung(user);
							}}>
							Chỉnh sửa
						</button>
						<button
							className='btn btn-danger ml-2'
							onClick={() => {
								this.props.xoaNguoiDung(user.id);
							}}>
							Xóa
						</button>
					</td>
				</tr>
			);
		});
	};

	render() {
		return (
			<div>
				<h4 className='p-3 bg-dark text-white'>Danh sách người dùng</h4>
				<div className='container-fluid'>
					<table className='table'>
						<thead>
							<tr>
								<th>STT</th>
								<th>Tài khoản</th>
								<th>Họ tên</th>
								<th>Mật khẩu</th>
								<th>Email</th>
								<th>Số điện thoại</th>
								<th>Loại người dùng</th>
								<th></th>
							</tr>
						</thead>
						<tbody>{this.renderListNguoiDung()}</tbody>
					</table>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		listNguoiDung: state.QuanLyNguoiDungReducer.listNguoiDung,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		xoaNguoiDung: (id) => {
			dispatch(xoaNguoiDung(id));
		},
		suaNguoiDung: (user) => {
			dispatch(suaNguoiDung(user));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TableDanhSach);
