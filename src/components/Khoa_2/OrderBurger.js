import React, { Component } from "react";
import "../Khoa_2/OrderBurger.css";
import MyBurger from "./MyBurger";
import MyMenu from "./MyMenu";

export default class OrderBurger extends Component {
	render() {
		return (
			<div className='container-fluid text-center'>
				<h1 className='text-success display-4'>Bài tập Burger Cybersoft</h1>
				<div className='row mt-5'>
					<MyBurger />
					<MyMenu />
				</div>
			</div>
		);
	}
}
