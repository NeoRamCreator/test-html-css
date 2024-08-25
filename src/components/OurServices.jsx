import React, { useState } from "react";


const OurServices = () => {

	return (
		<>

			<div className="content relative b7">
				<h2>Наши услуги</h2>
				<p className="text">Мы сможем отремонтировать любой вид техники, вот наиболее часто заказываемые у нас услуги</p>
				<div className="b7 flex 	">

					<div className="mb-30 box wrapper  bg-gradient">
						<div className="box  flex">
							<p className="bg-img-gradient">Замена light сенсора на телефоне</p>
							<div className="">
								<div className="text-services flex jc-sb">
									<div className="bg-img-gradient">1-3 дня</div>
									<div className="bg-img-gradient">1 000 - 3 000 ₽</div>
								</div>
							</div>
						</div>
					</div>

					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />

					



				</div>
			</div>
		</>
	)
}

export default OurServices


const Card = () => {
	return (
		<div className="mb-30 box wrapper  ">
			<div className="box  flex">
				<p className="">Замена light сенсора на телефоне</p>
				<div className="">
					<div className="text-services flex jc-sb">
						<div className="">1-3 дня</div>
						<div className="">1 000 - 3 000 ₽</div>
					</div>
				</div>
			</div>
		</div>)
}