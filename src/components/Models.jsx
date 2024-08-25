import React from "react";
import img from '../static/thumb_240588_default_big 6.png'

const cards = [
	{
		id: 1,
		text: '20 Pro 8/256Gb Phantom Blue',
		img: img,
	},
	{
		id: 2,
		text: '20 Pro 8/256Gb Phantom Blue',
		img: img,
	},
	{
		id: 3,
		text: '20 Pro 8/256Gb Phantom Blue',
		img: img,
	},
	{
		id: 4,
		text: '20 Pro 8/256Gb Phantom Blue',
		img: img,
	},
	{
		id: 5,
		text: '20 Pro 8/256Gb Phantom Blue',
		img: img,
	},
	{
		id: 6,
		text: '20 Pro 8/256Gb Phantom Blue',
		img: img,
	},
	{
		id: 7,
		text: '20 Pro 8/256Gb Phantom Blue',
		img: img,
	},
	{
		id: 8,
		text: '20 Pro 8/256Gb Phantom Blue',
		img: img,
	},

]

const Models = ({ }) => {
	return (
		<>
			{/* <div className="component">
				<section> */}
			{/* <div className="models"> */}

			<div className="content flex b6 relative">
				<h2>Выберите модель</h2>
				<p>Выберите свою модель</p>

				<div className="flex jc-sb">
					{cards.map(card => {
						return <Card item={card} />
					})}
				</div>

				<button className="bg-gradient">Показать еще</button>
			</div>
			{/* </div> */}
			{/* </section>
			</div> */}
		</>
	)
}
export default Models;

const Card = ({ item }) => {
	return (
		<div className=" box mb-30">

			<div className="model flex ">
				<p className="">{item.text}</p>
				{/* <div className="img"> */}
				<img src={item.img} alt="" />
				{/* </div> */}
			</div>

		</div>
	)
}