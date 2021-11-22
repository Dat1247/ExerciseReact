import { TANG_GIAM_SO_LUONG } from "../types/OrderBurgerType";

export const tangGiamSoLuong = (name, tangGiam) => {
	return {
		type: TANG_GIAM_SO_LUONG,
		name,
		tangGiam,
	};
};
