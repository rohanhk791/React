import React, { Component } from "react";
import { MdAndroid } from "react-icons/md";
import { FaAmazon } from "react-icons/fa";
class Icons extends Component {
	render() {
		return (
			<div>
				
				<MdAndroid size="50px" color="blue" />
				<FaAmazon size="50px" color="black" />
			</div>
		);
	}
}
export default Icons;