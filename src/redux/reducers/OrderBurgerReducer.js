import { TANG_GIAM_SO_LUONG } from "../types/OrderBurgerType";

const burgerState = {
	burger: [
		{ name: "salad", amount: 1, price: 10 },
		{ name: "cheese", amount: 1, price: 20 },
		{ name: "beef", amount: 1, price: 55 },
	],
};

const OrderBurgerReducer = (state = burgerState, action) => {
	switch (action.type) {
		case TANG_GIAM_SO_LUONG: {
			let burgerUpdate = [...state.burger];
			let index = burgerUpdate.findIndex((item) => item.name === action.name);
			if (index !== -1) {
				if (action.tangGiam) {
					burgerUpdate[index].amount += 1;
				} else {
					if (burgerUpdate[index].amount > 1) {
						burgerUpdate[index].amount -= 1;
					} else {
						alert("Số lượng tối thiểu là 1 !");
					}
				}
			}
			state.burger = burgerUpdate;
			return { ...state };
		}
		default:
			return { ...state };
	}
};

export default OrderBurgerReducer;
