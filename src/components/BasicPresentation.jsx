import img from '../static/a93598c416ebefaf374ac12cd862bde0 1.png'
import React from "react";


const BasicPresentation = () => {
	return (
		<>
			{/* <div className="component"> */}
			{/* <div className="container"> */}


			{/* <section> */}
			<div className="b2 content basic-presentation flex ">
				<div className="text">
					<h1>Ремонт <span>REALMI</span> в Екатеренбурге любой сложности</h1>
					<p>Ремонт устройств любой сложности в кратчайшие сроки с карантией до 3 месяцев</p>
					<button className='bg-gradient'>Заказать ремонт</button>
				</div>
				<div className="img">
					<img src={img} alt="" />
				</div>
			</div>
			{/* </section> */}

			{/* </div> */}
			{/* </div> */}
		</>

	)
}
export default BasicPresentation