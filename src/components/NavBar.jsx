import React from "react";


import icon from '../static/Mask Group (2).png'
const NavBar = () => {
	return (
		<>
			<div className="b1 content flex jc-sb ai-c">
				<a className="companie flex" href="">
					<img src={icon} alt="" />
				</a>
				<div className="flex ">
					<a className="action " href="">Наши услуги</a>
					<a className="action" href="">Бренды</a>
					<a className="action" href="">Отзывы</a>
				</div>
				<div className="flex ai-c ">
					<a className="phone" href=" tel:+8 (343) 311-21-11" >+8 (343) 311-21-11</a>
					<a className="collme" href=""><button className="collme">Перезвонить мне</button></a>
				</div>

			</div>

		</>

	)
}
export default NavBar;

