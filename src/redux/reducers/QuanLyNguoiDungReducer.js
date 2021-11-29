import {
	sua_nguoi_dung,
	them_nguoi_dung,
	xoa_nguoi_dung,
} from "../types/QuanLyNguoiDungType";

const stateNguoiDung = {
	listNguoiDung: [
		{
			id: 1,
			account: "superman",
			hoTen: "superman",
			passWord: "123",
			email: "superman@gmail.com",
			phone: "123456",
			loaiNguoiDung: "1",
		},
		{
			id: 2,
			account: "batman",
			hoTen: "batman",
			passWord: "123",
			email: "batman@gmail.com",
			phone: "123456",
			loaiNguoiDung: "1",
		},
		{
			id: 3,
			account: "wondergirl",
			hoTen: "wondergirl",
			passWord: "123",
			email: "wondergirl@gmail.com",
			phone: "123456",
			loaiNguoiDung: "2",
		},
	],
	editUser: {
		id: 2,
		account: "batman",
		hoTen: "batman",
		passWord: "123",
		email: "batman@gmail.com",
		phone: "123456",
		loaiNguoiDung: "1",
	},
};

const QuanLyNguoiDungReducer = (state = stateNguoiDung, action) => {
	switch (action.type) {
		case them_nguoi_dung: {
			let listNguoiDungUpdate = [...state.listNguoiDung];
			console.log(listNguoiDungUpdate);
			listNguoiDungUpdate.push(action.user);
			state.listNguoiDung = listNguoiDungUpdate;
			return { ...state };
		}
		case xoa_nguoi_dung: {
			let listNguoiDungUpdate = [...state.listNguoiDung];

			let index = listNguoiDungUpdate.findIndex(
				(user) => user.id === action.idUser
			);
			if (index !== -1) {
				listNguoiDungUpdate.splice(index, 1);
			}
			state.listNguoiDung = listNguoiDungUpdate;

			return { ...state };
		}
		case sua_nguoi_dung: {
			// console.log(action.user);
			let user = action.user;
			state.editUser = user;
			console.log(state.editUser);
			return { ...state };
		}
		default:
			return { ...state };
	}
};

export default QuanLyNguoiDungReducer;
