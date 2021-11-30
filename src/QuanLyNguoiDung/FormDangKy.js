import React, { Component } from "react";
import { TextField } from "../Components/TextField";
import { connect } from "react-redux";
import {
	themNguoiDung,
	updateNguoiDung,
} from "../redux/actions/QuanLyNguoiDungAction";

class FormDangKy extends Component {
	state = {
		values: {
			account: "",
			hoTen: "",
			password: "",
			email: "",
			phone: "",
			loaiNguoiDung: "1",
		},
		errors: {
			account: "",
			hoTen: "",
			password: "",
			email: "",
			phone: "",
		},
	};

	handleChange = (e) => {
		const { value, name, type } = e.target;
		let newValues = { ...this.state.values, [name]: value };
		let newErrors = { ...this.state.errors };

		if (value.trim() === "") {
			newErrors[name] = name + " không được để trống!";
		} else {
			newErrors[name] = "";
		}

		if (name === "phone") {
			let reg = /^\d+$/;
			if (!value.match(reg)) {
				newErrors[name] = "Số điện thoại phải là số!";
			} else {
				newErrors[name] = "";
			}
		}

		if (type === "email") {
			const regex =
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

			if (!value.match(regex)) {
				newErrors[name] = name + " không hợp lệ!";
			} else {
				newErrors[name] = "";
			}
		}
		console.log(this.state.values);

		this.setState({
			values: newValues,
			errors: newErrors,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { values, errors } = this.state;
		let valid = true;
		for (let key in values) {
			if (values[key] === "") {
				valid = false;
			}
		}
		for (let key in errors) {
			if (errors[key] !== "") {
				valid = false;
			}
		}

		if (!valid) {
			alert("Dữ liệu không hợp lệ!");
		} else {
			let user = {
				id: Date.now(),
				account: values.account,
				hoTen: values.hoTen,
				password: values.password,
				email: values.email,
				phone: values.phone,
				loaiNguoiDung: values.loaiNguoiDung,
			};

			this.setState(
				{
					values: {
						account: "",
						hoTen: "",
						password: "",
						email: "",
						phone: "",
						loaiNguoiDung: "1",
					},
				},
				() => {
					this.props.themNguoiDung(user);
				}
			);
		}
	};

	handleUpdate = (e) => {
		e.preventDefault();
		if (
			this.state.values.account !== "" &&
			this.state.values.email !== "" &&
			this.state.values.hoTen !== "" &&
			this.state.values.password !== "" &&
			this.state.values.phone !== ""
		) {
			this.props.updateNguoiDung(this.state.values);

			this.setState({
				values: {
					account: "",
					hoTen: "",
					password: "",
					email: "",
					phone: "",
					loaiNguoiDung: "1",
				},
			});
		} else {
			alert("Dữ liệu không hợp lệ!");
		}
	};

	render() {
		return (
			<div className='mb-3'>
				<h4 className='p-3 bg-dark text-white'>Form đăng ký</h4>
				<div className='container-fluid'>
					<form>
						<div className='row'>
							<div className='col-6 mt-3'>
								<TextField
									label='Tài khoản'
									name='account'
									type='text'
									value={this.state.values.account}
									onChange={(e) => {
										this.handleChange(e);
									}}
								/>
								<span style={{ fontSize: "13px", color: "red" }}>
									{this.state.errors.account}
								</span>
							</div>
							<div className='col-6 mt-3'>
								<TextField
									label='Họ tên'
									name='hoTen'
									type='text'
									value={this.state.values.hoTen}
									onChange={(e) => {
										this.handleChange(e);
									}}
								/>
								<span style={{ fontSize: "13px", color: "red" }}>
									{this.state.errors.hoTen}
								</span>
							</div>
							<div className='col-6 mt-3'>
								<TextField
									label='Mật khẩu'
									name='password'
									type='text'
									value={this.state.values.password}
									onChange={(e) => {
										this.handleChange(e);
									}}
								/>
								<span style={{ fontSize: "13px", color: "red" }}>
									{this.state.errors.password}
								</span>
							</div>
							<div className='col-6 mt-3'>
								<TextField
									label='Số điện thoại'
									type='text'
									name='phone'
									value={this.state.values.phone}
									onChange={(e) => {
										this.handleChange(e);
									}}
								/>
								<span style={{ fontSize: "13px", color: "red" }}>
									{this.state.errors.phone}
								</span>
							</div>
							<div className='col-6 mt-3'>
								<TextField
									label='Email'
									name='email'
									type='email'
									value={this.state.values.email}
									onChange={(e) => {
										this.handleChange(e);
									}}
								/>
								<span style={{ fontSize: "13px", color: "red" }}>
									{this.state.errors.email}
								</span>
							</div>
							<div className='col-6 mt-3'>
								<label htmlFor=''>Mã loại khách hàng</label>
								<br />
								<select
									name='loaiNguoiDung'
									id=''
									style={{
										minHeight: "35px",
										height: "35px",
										fontSize: "17px",
										width: "100%",
									}}
									value={this.state.values.loaiNguoiDung}
									onChange={(e) => {
										this.handleChange(e);
									}}>
									<option value='1'>Khách hàng</option>
									<option value='2'>Quản trị</option>
								</select>
							</div>
						</div>
						<div className='mt-4'>
							{this.props.disabledDangKy ? (
								<button
									disabled
									className='btn btn-success'
									onClick={(e) => {
										this.handleSubmit(e);
									}}>
									Đăng ký
								</button>
							) : (
								<button
									className='btn btn-success'
									onClick={(e) => {
										this.handleSubmit(e);
									}}>
									Đăng ký
								</button>
							)}
							{this.props.disabledCapNhat ? (
								<button
									disabled
									className='btn btn-primary ml-2'
									onClick={(e) => {
										this.handleUpdate(e);
									}}>
									Cập nhật
								</button>
							) : (
								<button
									className='btn btn-primary ml-2'
									onClick={(e) => {
										this.handleUpdate(e);
									}}>
									Cập nhật
								</button>
							)}
						</div>
					</form>
				</div>
			</div>
		);
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.editUser.id !== this.props.editUser.id) {
			this.setState({
				values: this.props.editUser,
			});
		}
	}
}

const mapStateToProps = (state) => {
	return {
		editUser: state.QuanLyNguoiDungReducer.editUser,
		disabledCapNhat: state.QuanLyNguoiDungReducer.disabledCapNhat,
		disabledDangKy: state.QuanLyNguoiDungReducer.disabledDangKy,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		themNguoiDung: (user) => {
			dispatch(themNguoiDung(user));
		},
		updateNguoiDung: (user) => {
			dispatch(updateNguoiDung(user));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FormDangKy);
