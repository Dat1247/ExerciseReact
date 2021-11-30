import {
	sua_nguoi_dung,
	them_nguoi_dung,
	update_nguoi_dung,
	xoa_nguoi_dung,
} from "../types/QuanLyNguoiDungType";
export const themNguoiDung = (user) => {
	return {
		type: them_nguoi_dung,
		user,
	};
};

export const xoaNguoiDung = (idUser) => {
	return {
		type: xoa_nguoi_dung,
		idUser,
	};
};

export const suaNguoiDung = (user) => {
	return {
		type: sua_nguoi_dung,
		user,
	};
};

export const updateNguoiDung = (user) => {
	return {
		type: update_nguoi_dung,
		user,
	};
};
