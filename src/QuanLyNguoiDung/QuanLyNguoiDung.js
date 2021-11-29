import React, { Component } from "react";

import FormDangKy from "./FormDangKy";
import TableDanhSach from "./TableDanhSach";

export default class QuanLyNguoiDung extends Component {
	render() {
		return (
			<div>
				<FormDangKy />
				<TableDanhSach />
			</div>
		);
	}
}
